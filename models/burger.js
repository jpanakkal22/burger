const orm = require("../config/orm");

var burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    }

}


