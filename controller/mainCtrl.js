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
getFamily: function (req, res) {
  res.status(200).send(JSON.stringify(user.family));
}
};
