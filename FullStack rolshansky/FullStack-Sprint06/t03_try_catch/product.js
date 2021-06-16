const EatException = require("./eat-exception");

module.exports.Product = class Product {
    constructor(name,kcal){
        this.name = name;
        this.kcal = kcal;
    }
    checkOnJunky(){
        if (this.kcal>200) {
            throw new EatException();
        }
    }
}