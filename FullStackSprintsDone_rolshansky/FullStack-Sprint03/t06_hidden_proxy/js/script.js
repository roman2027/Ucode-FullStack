const validator = {
    get(target, prop) {
        if(prop in target){
           console.log(`Trying to acess the property '${prop}' ...`);
           return  target[prop];
        }
        return false;
    },
    set(target, prop, value) {
        console.log(`Setting value '${value}' to '${prop}'`);
        target[prop] = value;
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new Error(`Uncaught TypeError: The '${prop}' is not an integer`);
            }
            if (value > 200 || value == 0) {
                throw new Error(`Uncaught RangeError: The '${prop}' is invalid`);
            }
        }
    }
};

let person = new Proxy({}, validator);

person.age = 100;
// Setting value '100' to 'age'
console.log(person.age)
// Trying to acess the property 'age' ...
// 100
person.gender = 'male';
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 330;
// Uncaught RangeError: The age is invalid