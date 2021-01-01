
// var express = require('express');
// var app = express();

// // respond with "hello world" when a GET request is made to the homepage
// app.get('../index.html', function(req, res) {
//   res.send("../html");
// });

var http = require("http");
var fs = require("fs");

function onRequest(request, response){
    response.writeHead(200);
    fs.readFile('../index.html', null, function(error,data){
        if(error){
            response.writeHead(404);
            response.write('File Not Found');
        }
        else{
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8989);

// app.listen(8989);