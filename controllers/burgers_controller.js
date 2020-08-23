var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
  
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // // Send back the ID of the new quote
    res.json({ id: result.insertId });
     
  });
});

  
  module.exports = router;
