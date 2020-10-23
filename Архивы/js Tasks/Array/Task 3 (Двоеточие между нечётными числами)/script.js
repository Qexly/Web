"use strict"

/*
Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), 
которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.
*/

let number = prompt("Введите число", "55639217");

function isPrime (number) {
    for (let i = 2; i < number; i++){
        if ((number / i) % 1 == 0) return false;
    }
    return true;
}

function colonOdd(num) {
    let result = "";
    let numberArr = num.split('');
    for (let i = 0; i < numberArr.length; i++) {
        if (isPrime(+numberArr[i]) && isPrime(+numberArr[i+1])){
            result += `${numberArr[i]}:`;
        } else {
            result += numberArr[i];
        }
    }

    alert(result);
}

colonOdd(number);