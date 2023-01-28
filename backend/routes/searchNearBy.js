var express = require('express');
var router = express.Router();
const axios = require('axios')
const key = require('./key');
const googleMapAPIRequestSingleData = require('../services/API-Request/googleMapAPIRequest');

const getFiveRandomTypes = require('../services/googleMapTypeRandom');

let fiveRandomTypes = getFiveRandomTypes();
router.post('/', async(req,res, next) => {
    try {
      const lat = req.body.lat;
      const long = req.body.long;
      const radius = "80000"
      
      // generate 5 random types 
      fiveRandomTypes = getFiveRandomTypes();

      // run each data for each types
      // results contain 5 places for 5 types (1 for each)
      const results = [];
      for (i = 0; i<fiveRandomTypes.length; i++) {
        const data = await googleMapAPIRequestSingleData(lat,long,radius,fiveRandomTypes[i]);
        if (data != null) results.push(data);
      }
      
      res.json(results);
    } 
      catch (err) {  
       next(err)
     }
})

module.exports =router;
