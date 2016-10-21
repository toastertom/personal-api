var user = require('../user.js');

module.exports = {

getName: function (req, res) {
  res.status(200).send(JSON.stringify(user.name));
},
getLocation: function (req, res) {
  res.status(200).send(JSON.stringify(user.location));
},
getOccupation: function (req, res) {
  res.status(200).send(JSON.stringify(user.occupation));
},
getOccupationLatest: function (req, res) {
  res.status(200).send(JSON.stringify(user.occupation.slice(1,2)));
},
getHobbies: function (req, res) {
  res.status(200).send(JSON.stringify(user.hobbies));
},
getHobbiesType: function (req, res) {
  res.status(200).send(JSON.stringify(user.hobbies.filter(function (type) {
    for (var key in hobbies) {
      if (key === req.type){

      }
    }
  })));
},
getFamily: function (req, res) {
  res.status(200).send(JSON.stringify(user.family));
},
getFamilyGender: function (req, res) {
  res.status(200).send(JSON.stringify(user.family));
},
getResturants: function (req, res) {
  res.status(200).send(JSON.stringify(user.resturants));
}
// getResturantsName: function (req, res) {
//   res.status(200).send(JSON.stringify(user.resturants));
// }

};
