var express = require('express');
var router = express.Router();
const axios = require('axios')
const key = require('../../routes/key');
const randomNumberGenerator = require("../randomNumberGenerator");
const modifiedDataFromRawData = require("./modifiedDataFromRawData");

const googleMapAPIRequest = async(lat,long,radius,type) => {
    try {
    const {data} = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=${radius}&type=${type}&key=${key}`   
    )

    const allRawData = data;
    if (allRawData.status === 'ZERO_RESULTS') {
        console.log("ZERO RESULT FOR THIS TYPE, TYPE = ", type);
    }
    else {
        const numberOfTotalResult = allRawData.results.length;
        const randomIndexOfPlace = randomNumberGenerator(numberOfTotalResult);
        const singleRawData = allRawData.results[randomIndexOfPlace];
        const modifiedData = modifiedDataFromRawData(singleRawData);
        return modifiedData;
    }
    } catch(err) 
    {
        console.log("ERR");
    }

};


module.exports = googleMapAPIRequest;

// only return 1 random result