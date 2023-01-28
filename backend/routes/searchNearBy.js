var express = require('express');
var router = express.Router();
const axios = require('axios')
const key = require('./key');
router.post('/', async(req,res, next) => {
    try {
      const lat = req.body.lat;
      const long = req.body.long;
      const radius = "3000";
      const type = "restaurant";
      const {data} = await axios.get(
        
     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=${radius}&type=${type}&key=${key}`
        )
        res.json(data)
        } 
      catch (err) {
       next(err)
     }
})

module.exports =router;
