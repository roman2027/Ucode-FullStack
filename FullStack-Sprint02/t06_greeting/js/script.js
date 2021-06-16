'use strict'

const userName = () => {
    let firstName = prompt('Please, enter your first name!');
    let regFirstName = /^[A-Za-zА-Яа-я]{1,20}$/gi;
    firstName = firstName.toLowerCase();
    if (!regFirstName.test(firstName)){
        alert('Wrong input! Try again!');
        console.log('Wrong input! Try again!');
        userName();
    } else {
        let lastName = prompt(`Now enter your last name!`);
        let regLastName = /^[A-Za-zА-Яа-я]{1,20}$/;
        lastName = lastName.toLowerCase();
        if (!regLastName.test(lastName)){
            alert('Wrong input! Try again!');
            console.log('Wrong input! Try again!');
            userName();
        } else {
            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
            lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
            alert(`Hi, ${firstName} ${lastName}!`);
            console.log(`Hi, ${firstName} ${lastName}!`);
        }

    }
}
userName();