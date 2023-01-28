const allType = require('./googleMapAllTypes');
const ranDomNumberGenerator = require('./randomNumberGenerator');
const n  = allType.length;


function getFiveRandomTypes() {

    const selectedRandom = [];
    while (selectedRandom.length <5) {
        const randomIndex = ranDomNumberGenerator(n);
        if (selectedRandom.includes(allType[randomIndex])) continue;
        selectedRandom.push(allType[randomIndex]);
    }
    return selectedRandom;
}
module.exports = getFiveRandomTypes;