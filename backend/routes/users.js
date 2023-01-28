var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
  const request = require('request');
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
    else res.json("Error");
  });
  
} )


module.exports = router;
