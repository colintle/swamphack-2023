const modifiedDataFromRawData = (rawData) => {
    const result = {
        "name": rawData.name,
        "address": rawData.vicinity,
        "geometry":{
            "lat": rawData.geometry.location.lat,
            "long": rawData.geometry.location.lng
        },
        "open_now": "N/A",
        "types": rawData.types,
        "rating": rawData.rating,
    }
    try { if (rawData.opening_hours.open_now) {
        result.open_now = rawData.opening_hours.open_now;
    } }
    catch(err) {
        console.log(err);
    }
    return result;
}

module.exports = modifiedDataFromRawData;