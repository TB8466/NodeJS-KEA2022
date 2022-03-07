const animals = require("./animals.json");

function amountOfAnimals(){
    return animals.favorites.length;
}

module.exports = {
    calculateFavAnimals: amountOfAnimals
};