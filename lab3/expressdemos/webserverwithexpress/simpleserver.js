var express = require('express');
express().use(function(req, res, next) {
    res.end('hello world');
}).listen(3000);