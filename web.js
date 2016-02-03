var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/m101', function(err, db) {
    if (err) throw err;

    app.get('/', function(req, res) {
        return res.send('hello user');
    });

    app.get('*', function(req, res) {
        return res.send('Page Not Found', 404);
    });

    app.listen(8080);
    console.log('Express server started on port 8080');
});