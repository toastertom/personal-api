var user = require('../user.js');

module.exports = {

getName: function (req, res) {
  res.status(200).json(user.name);
},

};
