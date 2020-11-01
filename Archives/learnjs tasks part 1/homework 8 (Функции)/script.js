'use strict'
/*
function checkAge(age) {
    result = age > 17 || confirm('Родители разрешили?');
    return result;
}

Age = prompt('Сколько лет?', '');

alert(checkAge(Age)); 
*/
/*
function min(a, b) {
    if (a < b) {
        return a;
      } else {
        return b;
      }
      //или
     return a < b ? a : b;
}
*/

let x = prompt('Введите основание степени','1');
let n = prompt('Введите показатель степени','1');

function pow(x, n) {
    let result = x;
    while (n > 1) {
        result *= x;
        n--;
    }
    return result;
}

alert (pow(x,n));