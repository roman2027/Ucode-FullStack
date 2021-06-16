class Avenger {
  constructor(heroName, alias, gender, age, powers, hp) {
    this.heroName = heroName;
    this.alias = alias;
    this.gender = gender;
    this.age = age;
    this.powers = powers;
    this.hp = hp;
  }

  toString() {
    return (
      "name: " +
      this.heroName +
      "\ngender: " +
      this.gender +
      "\nage: " +
      this.age
    );
  }
  __call__() {
    return "alias: " + this.alias.toUpperCase() + "\n" + this.powers.join("\n");
  }
}

module.exports.Avenger = Avenger;
