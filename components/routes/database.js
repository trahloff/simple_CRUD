const express = require('express'),
    levelup = require('levelup'),
    db = levelup('./mydb');


module.exports = (function() {
    let api = express.Router();

    api
        .get("/:key", (request, response) => {
            db.get(request.params.key, (error, value) => {
                let answer = error ? error.toString() : value;
                response.send(answer);
            })
        })
        .put("/:key/:value", (request, response) => {
            db.put(request.params.key, request.params.value, (error) => {
                let answer = error ? error.toString() : 'key: "' + request.params.key + '" now has value: "' + request.params.value + '"';
                response.send(answer);
            })
        })
        .delete("/:key", (request, response) => {
            db.del(request.params.key, (error) => {
                let answer = error ? error.toString() : 'successfully deleted key: "' + request.params.key + '"';
                response.send(answer);
            });
        });

    return api;
})();
