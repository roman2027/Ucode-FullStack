function* iterator() {
    let newNumber = 0;
    let res = 1;
    for(let i = 0; i >= -1;) {
        res = Number(newNumber) + Number(res);
            if(res >= 1000) {
            res=0;
            }
    yield newNumber = prompt('Previous result: ' + res + ' Enter a new number');
    }
}

const gen = iterator();

function run() {
    for(let i = 10; i > -1;) {
        gen.next();
    }
}

run();