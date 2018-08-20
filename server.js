var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.on('data', function (data) {
            var newProducts = JSON.parse(data);

            fs.readFile('goods.json', function (err, data) {
                var products = JSON.parse(data);
                products.push(newProducts);
                console.log(JSON.stringify(products));
                res.end();
            })
        })
    }
// }).listen(8080);



// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function (req, res) {

    if (req.url !== 'favicon.ico') {
        fs.readFile(req.url.replace('/', ''), function (err, data) {
            res.write(data);
            res.end('ok');
        });
    } else res.end();
}).listen(8080);


