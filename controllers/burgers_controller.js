const express = require("express");
const burgers = require("../models/burger");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
    //   res.render("index", hbsObject);
    });
});
  
  module.exports = router;
