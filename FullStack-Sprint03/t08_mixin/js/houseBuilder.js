class HouseBlueprint {
  constructor(address, description, owner, size, roomCount, date) {
  this.address = address,
  this.description = description,  
  this.owner = owner,
  this.size = size,
  this.roomCount = roomCount,
  this.date = new Date()
  }
} 
class HouseBuilder extends HouseBlueprint {
  constructor(address, description, owner, size, roomCount, date, _building_speed) {
      super (address, description, owner, size, roomCount, date);
      this._building_speed = 0.5
  }
      getDaysToBuild() {
          return this.size/this._building_speed;
  }
}

const house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.', 'J. Smith',
110,
5);

Object.assign(house, houseMixin);
console.log(house.getDaysToBuild());// 220
console.log(house.description);// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);// Spacious town house with tile flooring, 2-car garage, and a back patio.
house.wordDelete("town ");
console.log(house.description);// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter("with", "marble");
console.log(house.description);// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);// Spacious house with marble