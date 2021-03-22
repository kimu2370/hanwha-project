const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const {spawn} = require('child_process');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.post('/python', (req, res) => {
    let dataToString;
    const data = req.body.data;
    const result = spawn('python', ['print.py', `${data.name}`, `${data.message}`]);

    result.stdout.on('data', function (data) {
        // console.log('data', new Buffer.from(data, 'utf-8').toString());
        dataToString = new Buffer.from(data, 'utf-8').toString();
    });

    result.stderr.on('data', function (data) {
        console.log('456', data.toString());
    });

    result.on('close', code => {
        res.send(dataToString);
    });
});

app.listen(port, () => console.log(`Listening on ${port}`));
