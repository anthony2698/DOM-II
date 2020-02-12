// Your code goes here
let body = document.querySelector('body');
let headerImg = document.querySelector('.intro img');

headerImg.addEventListener('mouseover', (event) => {
    body.style.backgroundColor = 'lightgreen';
});

headerImg.addEventListener('mouseleave', (event) => {
    body.style.backgroundColor = 'white';
});

let letsGo = document.querySelector('.text-content h2');

letsGo.addEventListener('dblclick', (event) => {
    letsGo.textContent = "Let's Goooooooooo!";
});

letsGo.addEventListener('mouseleave', (event) => {
    letsGo.textContent = "Let's Go!";
});

let contentImgs = document.querySelectorAll('.img-content');

contentImgs.forEach((el) => {
    el.addEventListener('mousemove', (event) => {
        el.style.transform = "scale(1.1, 1.1)";
        el.style.transitionDuration = "2s";
    });
    el.addEventListener('mouseleave', (event) => {
        el.style.transform = "scale(1, 1)";
    });
});

let headings = document.querySelectorAll('h2');

headings.forEach((el) => {
    el.addEventListener('mouseover', (event) => {
        el.style.transform = "skew(10deg, 5deg)";
        el.style.transitionDuration = "2s";
    });

    el.addEventListener('transitionend', (event) => {
        el.style.transform = "skew(0deg, 0deg)";
        el.style.transitionDuration = "2s";
    });
});

let logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', (event) => {
    logoHeading.style.transform = "rotate(360deg)";
    logoHeading.style.transitionDuration = "4s";
});

let cards = document.querySelectorAll('.destination');

cards.forEach((el) => {
    el.addEventListener('mouseover', (event) => {
        el.style.transform = "scale(1.5, 1.5)";
        el.style.transitionDuration = "2s";
    });
});





