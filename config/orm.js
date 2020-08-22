var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, val, cb) {
    var queryString = "INSERT INTO ?? VALUES ?";
    connection.query(queryString, [table, val], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, cols, value, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, col1, val2, col2, val2], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  
};

module.exports = orm;