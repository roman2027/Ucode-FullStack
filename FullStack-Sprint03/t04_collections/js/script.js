const menu = new Map();
menu
.set('salad', 'Seafood salad')
.set('pizza', 'Chicken')
.set('dessert', 'ice cream')
.set('fruit', 'apple')

// console.log(menu);
// console.log(menu.size);
// menu.delete('fruit');
// console.log(menu);
// console.log(menu.get('salad'));
// menu.clear();
// console.log(menu.size);

const bankVault = new WeakMap();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let alla = { name: "Alla" };
bankVault
.set(john, "10$")
.set(pete, '17$')
.set(mary, '52$')
.set(alla, '14$');
console.log(bankVault);
// console.log(bankVault.get(john));
// bankVault.delete(mary);
// console.log(bankVault.has(mary));

let guestList = new WeakSet();

let joh = { name: "John" };
let pet = { name: "Pete" };
let mar = { name: "Mary" };

guestList.add(joh); 
guestList.add(pet);
guestList.add(mar); 

// console.log(guestList.has(joh)); 
// console.log(guestList); 
// joh = null;
// console.log(guestList.has(joh)); 
// console.log(guestList); 

let coinCollection = new Set();
coinCollection
.add(10)
.add(50)
.add(10)
.add(45);
// console.log(coinCollection);
// console.log(coinCollection.size);
// coinCollection.delete(45);
// console.log(coinCollection);