let firstName = document.querySelector('#showFirstName')
let lastName = document.querySelector('#showLastName')
let age = document.querySelector('#showAge')
let gender = document.querySelector('#showGender')
let image = document.querySelector('img')
let calories = document.querySelector('#showCalories')
let feed = document.querySelector('#eating')
let voiceOf = document.querySelector('#voice')
let sleepOf = document.querySelector('#sleeping')
let power = document.querySelector('#turn')
let flyUp = document.querySelector('#fly')
let fightWith = document.querySelector('#evil')
let getGen = ""
class Human {
    constructor(firstName, lastName, age, gender, calories){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.gender = gender,
        this.calories = calories

    }
    feed(getGen){
        let cal = parseInt(calories.innerHTML)
        cal += 200;
        if (cal >= 500){
            calories.innerHTML = cal;
            voiceOf.innerHTML = 'Im not hungry'
            setTimeout(() => {
                voiceOf.innerHTML = ''
            }, 5000);
            
        }else{
            calories.innerHTML = cal;
            voiceOf.innerHTML = 'Nom nom nom'
            
        }
        setTimeout(() => {
            calories.innerHTML = cal;
            if (cal < 500){
                voiceOf.innerHTML = 'Im still hungry'
            }else{
                voiceOf.innerHTML = ''
            }
        }, 6000);
    }
    sleepFor(){
        let time = parseInt(prompt('How many time for sleeping in seconds ?')+'000')
        voiceOf.innerHTML = 'Im sleeping...zzz'
        setTimeout(() => {
            voiceOf.innerHTML = 'Waking...UP'
            setTimeout(() => {
                voiceOf.innerHTML = ''
            }, 3000);
            
        }, time);
    }
}

function createHuman(){
    let getFirstName = prompt('Enter the first name')
    let getLastName = prompt('Get the last name')
    let getAge = prompt('How old is it?')
    let getGender = prompt('What is the gender(male or female)')
    let getCalories = 0;
    if (calories.innerHTML > 0){
        human.calories = parseInt(calories.innerHTML)
    }
    const human = new Human(getFirstName, getLastName, getAge, getGender, getCalories)
    showFirstName.innerHTML = human.firstName;
    showLastName.innerHTML = human.lastName;
    showAge.innerHTML = human.age;
    showGender.innerHTML = human.gender;
    showCalories.innerHTML = human.calories;

    getGen = human.gender.toLowerCase();

    if (getGen != 'male' && getGen != 'female'){
      alert('Wrong gender info, try again, pls')
  } else if (getGen == 'male') {
      image.src = 'https://image.shutterstock.com/image-vector/superhero-standing-proudly-cartoon-vector-260nw-760506916.jpg';
      feed.onclick = function(){human.feed()}
      sleepOf.onclick = function(){human.sleepFor()}
  } else if (getGen == 'female') {
      image.src = `https://img.pikbest.com/png-images/qiantu/hand-drawn-female-superhero_2662492.png!c1024wm0/compress/true/progressive/true/format/webp/fw/1024`;
      feed.onclick = function(){human.feed()}
      sleepOf.onclick = function(){human.sleepFor()}
  }

    setInterval(() => {
        let cal = parseInt(calories.innerHTML)
        if(cal > 0){
        cal -=100
        calories.innerHTML = cal
        }
        }, 20000);
}
class Superhero extends Human {
    fly(){
        voiceOf.innerHTML = 'Im flying...';
        if (getGen == 'male') {
          image.src = 'https://www.pngkey.com/png/full/422-4221270_flying-superhero-super-hero-flying.png'
        } else if (getGen == 'female') {
          image.src = `https://st3.depositphotos.com/1163454/15993/v/600/depositphotos_159933690-stock-illustration-super-heroine-flying.jpg`
        }
        setTimeout(() => {
            voiceOf.innerHTML = '';
            if (getGen == 'male') {
            image.src = 'https://image.shutterstock.com/image-vector/superhero-standing-proudly-cartoon-vector-260nw-760506916.jpg';
            } else if (getGen == 'female') {
            image.src = `https://img.pikbest.com/png-images/qiantu/hand-drawn-female-superhero_2662492.png!c1024wm0/compress/true/progressive/true/format/webp/fw/1024`;
            }
        }, 4000);
    }
    fightWithEvil(){
        voiceOf.innerHTML = 'Khhh-chh...Bang-g';
        if (getGen == 'male') {
          image.src = 'https://img.pikbest.com/png-images/qianku/fight-against-evil-characters_2225836.png!bw700';
        } else if (getGen == 'female') {
          image.src = 'https://img.pikbest.com/png-images/qianku/fight-against-evil-characters_2225836.png!bw700';
        }
        setTimeout(() => {
            voiceOf.innerHTML = '';
            if (getGen == 'male') {
            image.src = 'https://image.shutterstock.com/image-vector/superhero-standing-proudly-cartoon-vector-260nw-760506916.jpg';
            } else if (getGen == 'female') {
            image.src = `https://img.pikbest.com/png-images/qiantu/hand-drawn-female-superhero_2662492.png!c1024wm0/compress/true/progressive/true/format/webp/fw/1024`;
            }
        }, 4000);
    }
}
function turnIn() {
    let cal = parseInt(calories.innerHTML);
    if (cal >= 500){
        flyUp.style.display = '';
        fightWith.style.display = '';
        let superhero = new Superhero();
        flyUp.onclick = function() {
            superhero.fly();
        }
        fightWith.onclick = function() {
            superhero.fightWithEvil();
        }
    } else {
        alert('So seek')
    }
}