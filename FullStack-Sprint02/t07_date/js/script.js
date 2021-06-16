'use strict'
function getFormattedDate(date){
    const dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    function getValue(value){
        if (value < 10){
            return `0${value}`;
        } else {
            return `${value}`;
        }
    }
    return getValue(date.getDate()) + '.' + getValue(date.getMonth() + 1) + '.' 
    + date.getFullYear() + ' ' + getValue(date.getHours()) + ':' 
    + getValue(date.getMinutes()) + ' ' + dayWeek[date.getDay()];
}