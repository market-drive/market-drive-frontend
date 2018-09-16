const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('http://54.37.125.180:8080/marketdrive/products'));

app.listen(8080, function () {
    console.log('Server is running');
});

