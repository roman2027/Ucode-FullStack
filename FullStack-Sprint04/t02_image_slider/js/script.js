'use strict';

let offset = 0;
const sliderLine = document.querySelector('.slider'),
       container = document.querySelector('.main');

document.querySelector('.left').addEventListener('click', prevSlider)
document.querySelector('.right').addEventListener('click', nextSlider)


let interval = setInterval(nextSlider, 3000);
container.onmouseover = stopInterval;
container.onmouseout = goInterval;

function stopInterval() {
    clearInterval(interval);
}

function goInterval() {
    interval = setInterval(nextSlider, 3000);
}

function prevSlider() {
    offset -= 230;
    if(offset < 0) {
        offset = 460;
    }
    sliderLine.style.left = -offset + 'px';
}

function nextSlider() {
    offset += 230;
    if(offset > 460) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}