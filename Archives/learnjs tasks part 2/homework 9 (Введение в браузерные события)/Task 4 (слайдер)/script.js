'use strict'

let rightArrow = document.body.querySelector('.slider').lastElementChild;

rightArrow.addEventListener('click', (e) => {
    let ul = document.body.querySelector('.scroller ul');
    ul.style.position = 'relative';
    if (ul.style.left == 0) ul.style.left = '0px';
    ul.style.left = parseInt(ul.style.left) - 390 + 'px';
});

let leftArrow = document.body.querySelector('.slider').firstElementChild;

leftArrow.addEventListener('click', (e) => {
    let ul = document.body.querySelector('.scroller ul');
    ul.style.position = 'relative';
    if (ul.style.left == 0) ul.style.left = '0px';
    ul.style.left = parseInt(ul.style.left) + 390 + 'px';
});