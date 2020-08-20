var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
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
    var queryString = "UPDATE ?? SET ?? WHERE burger_name = ";
    connection.query(queryString, [table, cols, value], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  
};

module.exports = orm;