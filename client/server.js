const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));

// console.log('userdb>>>>>>>>', userdb.accessToken);

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';

const expiresIn = '1h';

// Create a token from a payload
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

// Verify the token
function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err));
}

// Check if the user exists in database
function isAuthenticated({email, password}) {
    return (
        userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
    );
}

// Register New User
server.post('/auth/register', (req, res) => {
    console.log('register endpoint called; request body:');
    console.log(req.body);
    const {email, password, name} = req.body;

    if (isAuthenticated({email, password})) {
        const status = 401;
        const message = 'Email and Password already exist';
        res.status(status).json({status, message});
        return;
    }

    fs.readFile('./users.json', (err, data) => {
        if (err) {
            const status = 401;
            const message = err;
            res.status(status).json({status, message});
            return;
        }

        // Get current users data
        let parsedData = JSON.parse(data.toString());

        // Get the id of last user
        let last_item_id = parsedData.users[parsedData.users.length - 1].id;

        //Add new user
        parsedData.users.push({
            id: last_item_id + 1,
            email,
            password,
            name,
        }); //add some data

        fs.writeFile('./users.json', JSON.stringify(parsedData), (err, result) => {
            // WRITE
            if (err) {
                const status = 401;
                const message = err;
                res.status(status).json({status, message});
                return;
            }
        });
        res.status(200).json({payload: true});
    });
});

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
    console.log('login endpoint called; request body:');
    console.log(req.body);
    const {email, password} = req.body;
    if (isAuthenticated({email, password}) === false) {
        const status = 401;
        const message = 'Incorrect email or password';
        res.status(status).json({status, message});
        return;
    }
    const access_token = createToken({email, password});
    console.log('Access Token:' + access_token);
    res.status(200).json({access_token});
});

server.use(/^(?!\/auth|\/posts|\/categories|\/token).*$/, (req, res, next) => {
    if (
        req.headers.authorization === undefined ||
        req.headers.authorization.split(' ')[0] !== 'Bearer'
    ) {
        const status = 401;
        const message = 'Error in authorization format';
        res.status(status).json({status, message});
        return;
    }
    try {
        let verifyTokenResult;
        verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

        if (verifyTokenResult instanceof Error) {
            const status = 401;
            const message = 'Access token not provided';
            res.status(status).json({status, message});
            return;
        }
        next();
    } catch (err) {
        const status = 401;
        const message = 'Error access_token is revoked';
        res.status(status).json({status, message});
    }
});

server.use(router);

server.listen(8000, () => {
    console.log('Run Auth API Server');
});
