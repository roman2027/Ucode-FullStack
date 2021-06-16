const i = {
    checkDivision: (a = 1, b = 60) => {
        for (let range = a; range <= b; range++){
            if (range % 2 === 0 && range % 3 !== 0){
                console.log(`The number ${range} is divisible by 2`)
            }
            else if (range % 3 === 0 && range % 2 === 0 && range % 10 === 0){
                console.log(`The number ${range} is divisible by 2, is divisible by 3, is divisible by 10`)
            }
            else if (range % 3 === 0 && range % 2 === 0){
                console.log(`The number ${range} is divisible by 2, is divisible by 3`)
            }
            else if (range % 3 === 0){
                console.log(`The number ${range} is divisible by 3`)
            }
            else if (range % 3 && range % 2 !== 0){
                console.log(`The number ${range} -`)
            }
        }
    }
}

module.exports = i;