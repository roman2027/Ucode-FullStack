const { Product } = require("./product");
const EatException = require("./eat-exception");

module.exports.Ingestion = class Ingestion {
  constructor(meal, mealNumber) {
    this.meal = meal;
    this.mealNumber = mealNumber;
  }
  products = [];
  setProduct(product) {
    this.products.push(product);
  }
  getProductInfo(pname) {
    let product = {};
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name == pname) {
        product.kcal = this.products[i].kcal;
        break;
      }
    }
    return product;
  }
  getFromFridge(pname) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name == pname) {
        try {
          this.products[i].checkOnJunky();
        } catch (error) {
          if (error instanceof EatException) {
            error.message =
              "To many calories in" + pname + "for" + this.meal + "!";
            throw error;
          }
        }
        break;
      }
    }
  }
};
