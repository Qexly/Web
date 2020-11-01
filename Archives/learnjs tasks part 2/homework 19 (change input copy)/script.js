"use strict"

let startMoney = document.getElementsByName('money')[0];
let select = document.querySelector('select');
let persentsInput = document.getElementsByName('interest')[0];

let form = document.forms.calculator;

window['money-before'].textContent = startMoney.value;

startMoney.addEventListener('input', (e) => {
    window['money-before'].textContent = e.target.value;
});

form.addEventListener('input', calcGreenHeight);

window.addEventListener('load', calcGreenHeight);

function calcGreenHeight(event) {
    let initial = +startMoney.value;
    let years = +select.value / 12;
    let interest = +persentsInput.value / 100;
    let result = Math.round(initial * (1 + interest * years));
    window['money-after'].textContent = result;

    let increasesPx =  result / startMoney.value * 100;
    window['height-after'].style.height = increasesPx + 'px';
}