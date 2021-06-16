class HardWorker{
  name;  
  get age(){ return this._age}
  set age(value){
    if((value > 100) || (value < 1)){
      this.age;
      return;
  }
    this._age = value;
  }

  get salary(){ return this._salary}
  set salary(value){
    if((value > 10000) || (value < 100)){
      this.salary;
      return;
  }
    this._salary = value;
  }
  toObject() {
    return {
    name: this.name,
    age: this.age,
    salary: this.salary
    }
  }
}

worker = new HardWorker;
worker.name = "Bruce";
console.log(worker.name);
//Bruce

worker.age = 50;
worker.salary= 1500;
console.log(worker.toObject());
// Object { name: "Bruce", age: 50, salary: 1500 }

worker.name= 'Linda';
worker.age = 140;
console.log(worker.toObject());
// Object { name: "Linda", age: 50, salary: 1500 }