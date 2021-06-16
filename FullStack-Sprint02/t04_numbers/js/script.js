'use strict'

const checkDevision = (beginRange, endRange) => {
    let range = '';
    while (beginRange <= endRange){
        let description = ' '
        if (beginRange % 2 === 0){
            description += ' [is even] ';
        }
        if (beginRange % 3 === 0){
            description += ' [is a multiple of 3] ';
        }
        if (beginRange % 10 === 0){
            description += ' [is a multiple of 10] ';
        }
        if ((beginRange % 2 !== 0) && (beginRange % 3 !== 0) && (beginRange % 10 !== 0)){
            description += ' [-] ';
        }
        range += beginRange + description + '\n';
        beginRange++;
    }
alert(`Values entered correctly!\nSee the result in the console!`);
console.log(`The input range is:\n${range}`);
}

const mainFunction = () => {
    let beginRange = +prompt(`Enter the start of the range!`, 1);
    let endRange = +prompt(`Range of ( ${beginRange} - now enter the end of the range)`, 100);

    if (beginRange >= endRange || beginRange < 0 || endRange < 0 || isNaN(beginRange) || isNaN(endRange)){
        alert('Please try again!\nThe end of the range must be greater than the start of the range!');
        mainFunction();
    } else {
        checkDevision(beginRange, endRange);
    }
}
mainFunction();