var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        })
    },
    updateOne: function(col1, val1, col2, val2, cb){
        orm.updateOne("burgers", col1, val1, col2, val2, function(res){
            cb(res);
        })
    }  
}

module.exports = burger;


