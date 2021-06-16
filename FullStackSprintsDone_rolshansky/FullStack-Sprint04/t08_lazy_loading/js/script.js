const images = document.querySelectorAll('[data-src]');

let loaded = 0,
    loadedNumber = document.querySelector('#loaded-number'),
    info = document.querySelector('.info');

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }

    img.src = src;

    loaded++;
    loadedNumber.innerHTML = loaded;
    if(loaded == 20) {
        info.style.background = 'green';
    }
}

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            setTimeout(function() {
                preloadImage(entry.target);
            }, 300)
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
})