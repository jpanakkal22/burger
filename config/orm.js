var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      console.log(result);
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