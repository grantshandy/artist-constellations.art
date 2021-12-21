const express = require('express');
const bodyParser = require('body-parser');
const crypto = require("crypto");
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.post('/get', function (req, res) {
    let code = req.body.code.toUpperCase();

    MongoClient.connect('mongodb://127.0.0.1:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {

        if (err) {
            res.end(err);
        }

        // Specify database you want to access
        const db = client.db('artist_constellations');

        console.log(`finding ${code}`);
        db.collection("userData").find({ code: code }).toArray(function(err, result) {
            if (err) {
                res.end(err);
            }

            console.log(result);
            res.end(JSON.stringify(result[0].data));
        });
    });
});

app.post('/send', function (req, res) {
    let code = crypto.randomBytes(3).toString('hex').toUpperCase();

    MongoClient.connect('mongodb://127.0.0.1:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {

        if (err) {
            res.end(err);
        }

        const db = client.db('artist_constellations');

        db.collection('userData').insertOne({ code, data: req.body }, (err, result) => {
            if (err) {
                res.end(err);
            }
        });
    });

    res.end(code);
});

let port = 8081;

console.log(`starting server on port ${port}`);
let server = app.listen(port);