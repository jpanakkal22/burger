const orm = require("../config/orm");

var burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(val, cb){
        orm.insertOne("burgers", val, function(res){
            cb(res);
        })
    },
    updateOne: function(col1, val1, col2, val2, cb){
        orm.updateOne("burgers", col1, val1, col2, val2, function(res){
            cb(res);
        })
    }  
}

module.exports = burgers;


