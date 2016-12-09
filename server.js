


var http = require('http');
var dispatcher = require('httpdispatcher');
var port = 8000;
var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('html'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(port, function () {
    console.log('Listening on port 8000')
});


/*
function handleRequest(request, response) {
    try {
        response.end('It Works!! Path Hit: ' + request.url);
        dispatcher.dispatcher(request, response);
    } catch (err) {
        console.log(err);
    }
}

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(port, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", port);
});

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/page1", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Page One');
});

//A sample POST request
dispatcher.onPost("/post1", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Got Post Data');
});

*/