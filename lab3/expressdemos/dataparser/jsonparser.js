var express = require('express');
var bodyParser = require('body-parser');

var app = express()
    .use(bodyParser())
    .use(function(req, res) {
     
        if (req.body.foo) {
            res.end('body parsed! value of foo' + req.body.foo);
        }
        else{
            res.end('body does not have foo');
        }
        
    })
    .use(function(err, req, res) {
        res.end('invalid body');
    }).listen(3000);