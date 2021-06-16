class linkedList {
  constructor(data){
      this.data = data;
  }
  log() {
     return console.log(this.data.join(', '));
  }
  remove(i) {
      for (let x =0; x<this.data.length;x++){
          if (this.data[x] === i){
              this.data.splice(x, 1);
          }
      }
  }
  add(y) {
      this.data.push(y);
  }
  contains(h) {
      if (this.data.includes(h)){
          return true;
      } else {
        return false;
      }
  }
  [Symbol.iterator]() {
      let val = 0;
      return {
          next: () => ({
              value: this.data[val],
              done: this.data[val++] === this.data[this.data.length] 
          })
      }
  }
  clear() {
      this.data = ['""'];
  }
}

function createLinkedList(arr) {
  return creat = new linkedList(arr);
}


const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log(); // "1, 2, 3, 4, 5" 
ll.add(10);
ll.log(); // "1, 2, 3, 4, 5, 10" 
console.log(ll.contains(10)); // "true"
let sum = 0;
for (const n of ll) {
sum += n; 
}
console.log(sum); // "25" 
ll.clear ();
ll.log ();// ""