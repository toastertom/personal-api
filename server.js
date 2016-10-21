var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var middleware = require('./controller/middleware.js');
var mainCtrl = require('./controller/mainCtrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/name',mainCtrl.user.name);
app.get('/location',mainCtrl.user.location);
app.get('/occupation',mainCtrl.user.occupation);
// app.get('/occupation/latest',mainCtrl.name);
app.get('/hobbies',mainCtrl.user.hobbies);


app.listen(8001 ,function () {
  console.log('Listening on port 8001');
})
