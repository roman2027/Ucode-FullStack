class Building {
  constructor(floors, material, address) {
      this.floors = floors;
      this.material = material;
      this.address = address;
  }

  toString() {
      return [
          `Floors: ${this.floors}`,
          `Material: ${this.material}`,
          `Address: ${this.address}`,
      ].join('\n');
  }
};

class Tower extends Building{
  constructor(floors, material, address){
      super(floors, material, address)
      this.hasElevator = this;
      this.arcCapacity = this;
      this.height = this;
  }
  getFloorHeight(){
      return this.height/this.floors;
  }
  get hasElevator(){
      return this._hasElevator;
  }
  set hasElevator(value){
      if (value) {return this._hasElevator="+"} return this._hasElevator="-";
  }
  toString() {
      return [
          `Floors: ${this.floors}`,
          `Material: ${this.material}`,
          `Address: ${this.address}`,
          `Elevator: ${this.hasElevator}`,
          `Arc reactor capacity: ${this.arcCapacity}`,
          `Height: ${this.height}`,
          `Floor height: ${this.getFloorHeight()}`
      ].join('\n');
  }
}
const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());