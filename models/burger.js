var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(str, val, cb) {
    orm.insertOne("burgers", "burger_name", "devoured", str, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, condition, cb) {
    orm.updateOne("burgers", "devoured", condition, id, function(res) {
      cb(res);
    });
  }
};

module.exports = burgers;