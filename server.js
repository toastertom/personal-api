var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

var middleware = require('./controller/middleware.js')
var mainCtrl = require('./controller/mainCtrl.js')
