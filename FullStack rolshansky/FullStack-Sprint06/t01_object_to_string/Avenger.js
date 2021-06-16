class Avenger {
  constructor({ name, alias, gender, age, powers }) {
    this.name = name;
    this.alias = alias;
    this.gender = gender;
    this.age = age;
    this.powers = powers;
  }

  toString() {
    return ("name: " + this.name + "\n gender: " + this.gender + "\n age: " + this.age);
  }

  __call__() {
    return "alias: " + this.alias.toUpperCase() + "\n" + this.powers.join("\n");
  }
}

module.exports.Avenger = Avenger;