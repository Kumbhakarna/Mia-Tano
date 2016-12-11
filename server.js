


var http = require('http');
var dispatcher = require('httpdispatcher');
var port = 8000;
var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('html'));
app.use(express.static('images'));
app.use(express.static('css'));

app.get('/', function (req, res) {
    res.send('html/index.html');
});

app.listen(port, function () {
    console.log('Listening on port 8000')
});
