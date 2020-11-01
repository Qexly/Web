'use strict'
/*
let number1 = +prompt("Введите число","0");
let number2 = +prompt("Введите второе число","0");
alert(number1 + number2);
*/
/*
function readNumber() {
    let number;
    while (!isFinite(number)) {
        number = prompt("Введите число","");
        if (number == null || number == '') {
            return null;
        }
    }
    return +number;
}

let result = readNumber();
alert(result);
*/

function randomInteger(min, max) {
    return Math.trunc(Math.random() * max-min + min);
}