const express = require('express');
const bodyParser = require('body-parser');
const crypto = require("crypto");
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(express.static('public'));
// app.use(express.limit('4M'));

let currentData = null;

app.get('/data/:code', function (req, res) {
    res.status(200).send(JSON.stringify(currentData));
});

app.post('/upload', function (req, res) {
    currentData = req.body;

    res.status(200).send(JSON.stringify({ code: 'asdf' }));
});

// app.get('/data/:code', function (req, res) {
//     let code = req.params.code.toUpperCase().replace(/\s+/g, '');

//     MongoClient.connect('mongodb://127.0.0.1:27017', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, (err, client) => {
//         if (err) {
//             res.status(500).send(JSON.stringify(err));
//             return;
//         }

//         // Specify database you want to access
//         const db = client.db('artist_constellations');
//         db.collection("userData").find({ code: code }).toArray(function(err, result) {
//             if (err) {
//                 res.status(500).send(JSON.stringify(err));
//                 return;
//             }

//             result = result[0]?.data ?? null;

//             if (result) {
//                 res.status(200).send(JSON.stringify(result));
//             } else {
//                 res.status(204).send(JSON.stringify({ error: "No result" }));
//             }
//         });
//     });
// });

// app.post('/upload', function (req, res) {
//     let code = crypto.randomBytes(3).toString('hex').toUpperCase();

//     if (!req.body.user || !req.body.graphType || !req.body.nodes) {
//         console.log(req.body);
//         res.status(400).send(JSON.stringify({ error: "Invalid data"}));
//         return;
//     }

//     MongoClient.connect('mongodb://127.0.0.1:27017', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, (err, client) => {
//         if (err) {
//             res.status(500).send(JSON.stringify(err));
//             return;
//         }

//         const db = client.db('artist_constellations');

//         db.collection('userData').insertOne({ code, data: req.body }, (err, result) => {
//             if (err) {
//                 res.status(500).send(JSON.stringify(err));
//                 return;
//             }
//         });
//     });

//     res.status(200).send(JSON.stringify({ code }));
// });

let port = 5500;

console.log(`starting server on port ${port}`);
let server = app.listen(port);