// 'use strict'

let verifyAnimal = /^[A-Za-z]{1,20}$/gi;
let animal = prompt('What animal is the superhero most similar to?');
if (!verifyAnimal.test(animal)){
    alert('Wrong imput! Please try again!');
} else {  
    let verifyAge = /^[0-9]{1,5}$/;
    let age = prompt('How old is the superhero?');
    if (!verifyAge.test(age) || age == '0' || age == '00' || age == '000' || age == '0000' || age == '00000'){
        alert ('Wrong imput! Please try again!');
    } else {
        let genger = prompt('Is the superhero male or female? Leave blank if unknown or other.');
        gender = genger.toLowerCase();
        if (gender == 'male' || gender == 'female' || gender == ''){
            var hero = null;
            if (age < 18 && gender == 'male'){
                var hero = 'boy';
            } else if (age >= 18 && gender == 'male') {
                var hero = 'man';
            } else if (age < 18 && gender == 'female'){
                var hero = 'girl';
            } else if (age >= 18 && gender == 'female'){
                var hero = 'woman';
            } else if (age < 18 && gender == ''){
                var hero = 'kid';
            } else if (age >= 18 && genger == ''){
                var hero = 'hero';
            }
        } else {
            alert('Wrong imput! Please try again!');
        }
    }
}
alert(`The superhero name is: ${animal.toUpperCase()}-${hero.toUpperCase()}!`);