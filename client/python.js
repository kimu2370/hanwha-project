const express = require('express');
var cors = require('cors');
const {spawn} = require('child_process');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/write', async (req, res) => {
    const data = req.body.data;

    await fs.writeFile('input/index.txt', data.text, err => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server error!!!');
        }
    });

    const result = await spawn('python', ['print.py', `${data.text}`]);

    result.stdout.on('data', data => {
        console.log('success data', data.toString());
    });

    result.stderr.on('data', function (data) {
        console.log('456', data.toString());
    });
    result.on('close', code => {
        res.send({payload: true});
    });
});

app.get('/read', async (req, res) => {
    // output example
    fs.readFile('output/output.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server error!!!');
        }
        res.send(data);
    });
});

app.listen(port, () => console.log(`Listening on ${port}`));
