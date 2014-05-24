// https://github.com/brianc/node-postgres/wiki/Client
var express = require("express");
var app = express();
var pg = require('pg');
var e;

pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('INSERT INTO topscores VALUES ($1 , 100)',['Enio'],function(err, result) {
    done();
    if(err) return console.error(err);
    e = err;
  });
});

app.get('/', function(req, res) {
    res.send('Error: ' + e);
});
    
app.listen(80);