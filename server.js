var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var middleware = require('./controller/middleware.js');
var mainCtrl = require('./controller/mainCtrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/name',mainCtrl.name);
app.get('/location',mainCtrl.location)
app.get('/occupation',mainCtrl.occupation);
// app.get('/occupation/latest',mainCtrl.name);
app.get('/hobbies',mainCtrl.hobbies);


app.listen(8001 ,function () {
  console.log('Listening on port 8001');
})
