module.exports = class EatException extends Error {
  constructor(stack) {
    super(stack);
    this.name = "Eat Exeption";
    this.message = "No more junk food, dumpling";
  }
};
