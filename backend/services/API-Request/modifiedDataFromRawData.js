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
        "photo_reference": rawData.photos[0].photo_reference
    }
    try { if (rawData.opening_hours.open_now) {
        result.open_now = rawData.opening_hours.open_now;
    } }
    catch(err) {
        console.log("OPEN_NOW is not available for this place = ", rawData.name);
    }
    return result;
}

module.exports = modifiedDataFromRawData;