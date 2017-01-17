const express = require('express'),
    app = express(),
    fs = require('fs'),
    http = require('http');

app
    .use('/', require('./components/routes/database'))
    .use((request, response, next) => {
        response.status(404).end('error. route not found');
    });

const server = http.createServer(app).listen(80);
console.log("Server listening on localhost:80");
