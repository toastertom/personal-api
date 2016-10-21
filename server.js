var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var middleware = require('./controller/middleware.js');
var mainCtrl = require('./controller/mainCtrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/name',mainCtrl.getName);
app.get('/location',mainCtrl.getLocation);
app.get('/occupation',mainCtrl.getOccupation);
app.get('/occupation/latest',mainCtrl.getOccupationLatest);
app.get('/hobbies',mainCtrl.getHobbies);
// app.get('/hobbies/type:',mainCtrl.getHobbiesType);
app.get('/family',mainCtrl.getFamily);
// app.get('/family/gender',mainCtrl.getFamilyGender);
app.get('/resturants',mainCtrl.getResturants);
// app.get('/resturants/name',mainCtrl.getResturantsName);

app.listen(8002 ,function () {
  console.log('Listening on port 8002');
})
