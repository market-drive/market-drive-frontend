
    const express = require("express");
    const bodyParser = require("body-parser");
    const app = express;

    let parser = bodyParser.urlencoded({extended: false});

    app.use(express.static());

    app.post('http://54.37.125.180:8080/api/storage/%7Bid%7D', parser, function (request, response) {
        if (!request.body) return response.sendStatus(400);
        console.log(request.body);
        response.send();
    } );







