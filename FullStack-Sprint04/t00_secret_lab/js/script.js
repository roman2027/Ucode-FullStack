'use strict';

const lab = document.getElementById('lab'),
      hero = document.getElementById('hero'),
      btn = document.getElementById('btn');

function transformation() {
    if(hero.innerHTML === 'Bruce Banner') {
        hero.innerHTML = 'Hulk';
        hero.style.fontSize = '130px';
        hero.style.letterSpacing = '6px';
        lab.style.backgroundColor = '#70964b';
    } else {
        hero.innerHTML = 'Bruce Banner';
        hero.style.fontSize = '60px';
        hero.style.letterSpacing = '2px';
        lab.style.backgroundColor = '#ffb300';
    }
}