"use strict"
/*
    Первый вариант:
    let myArray = [1, 2, 3, 5, 6, 8, 10, 20];

for (let i = 0; i < myArray.length - 1; i++) {
    if (!(myArray[i+1] - myArray[i] == 1)) {
        let arr = myArray.slice(0, i+1);
        arr.push(myArray[i] + 1);
        myArray = arr.concat(myArray.slice(i+1));
    }
}
*/



let strArray = prompt("Введите числа массива через пробел", "1 2 3");
let numArray = strArray.split(' ');

for (let element of numArray) {
    if (isFinite(element)){
        continue;
    } else {
        alert("В строке содержится не только числа!")
        throw new Error("NaN");
    }
}

for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] - numArray[i - 1] != 1) {
        numArray.splice(i, 0, +numArray[i - 1] + 1);
    }
}

alert(numArray);