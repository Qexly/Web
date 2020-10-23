"use strict";
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function func(sum, currentValue) { 
    return (currentValue % 2 == 0) ? currentValue + sum : sum + 0;
}

let result = arr.reduce(func, 0);

alert(result); // 30 - сумма чётных
*/

/* 
//На входе - массив с дырами, а на выходе - без них
let myArray = [1, 2, 3, 5, 6, 8, 10, 20];

for (let i = 0; i < myArray.length - 1; i++) {
    if (!(myArray[i+1] - myArray[i] == 1)) {
        let arr = myArray.slice(0, i+1);
        arr.push(myArray[i] + 1);
        myArray = arr.concat(myArray.slice(i+1));
    }
}

alert(myArray); //Массив с числами от 1 до 20 по порядку
*/
/* Задания с learnJS
function camelize(str) {
    let strArr = str.split('');
    let findIndex = 0;
    let currentIndex;
    while(1) {
        currentIndex = strArr.indexOf('-', findIndex);
        if (currentIndex == -1) {return strArr.join('');}
        strArr.splice(currentIndex, 2, strArr[currentIndex + 1].toUpperCase());
        findIndex = currentIndex;
    }
}

alert(camelize('background-color'));
*/
/*
let arr = [5, 3, 8, 1];
function filterRange(massiv, a, b) {
    let result = massiv.filter((item, index, arry) => item >= a && item <=b);
    return result;
}
let filtered = filterRange(arr, 1, 4);
alert(filtered); 
alert(arr); 
*/

/*
let arr = [5, 3, 8, 9, 1]
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] >= a && arr[i] <=b)) {
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(arr, 1, 4);
alert(arr);
*/
/*
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => {
    return a - b;
}).reverse();

alert(arr);
*/

/*
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    let copyArr = arr.slice();
    return copyArr.sort();
}

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)
*/
/*
function Calculator() {
    this.calculate = function(str){
        let arr = str.split(' ');
        switch (arr[1]) {
            case '+':
                return +arr[0] + +arr[2];
                break;
            case '-':
                return +arr[0] - +arr[2];
                break;
            default:
               return this.searchMethod(arr[1], +arr[0], +arr[2]);
        }
    }
    this.addMethod = function(name, func) {
        name = 'method' + name;
        this[name] = func;
    }
    this.searchMethod = function(name, num1, num2) {
        if (this['method' + name] == undefined) {
            alert('Нет такого метода');
            return;
        }
        return this['method' + name](num1, num2);
    }
}

// let calc = new Calculator();
// let st = prompt("Введите выражение", "");
// alert(calc.calculate(st));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
let result = powerCalc.calculate("2 * 3");
alert(result);
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map((item, index, array) => item.name);

alert( names ); // Вася, Петя, Маша
*/
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => {
    return(
    {
    fullName: `${item.name} ${item.surname}`,
      id: item.id
    })
});

// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
*/

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

arr.sort((a, b) => a.age - b.age);

alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/

/*
let arr = [1, 2, 3];

function shuffle(arr) {
    let length = arr.length;
    let arrCopy = arr.slice();
    arr.length = 0;
    let randomIndex;
    for (let i = 0; i < length; i++) {
        randomIndex = Math.round(Math.random() * (arrCopy.length + 0,5) - 0.5);
        arr[randomIndex] = arrCopy.splice(i, 1);
    }
}
shuffle(arr);
alert(arr);
*/
/*
function unique(arr) {
    let massiv = [];
    for (let i = 0; i < arr.length; i++) {
        if (!massiv.includes(arr[i])) {
            massiv.push(arr[i]);
        }
    }
    return massiv;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O
  */

// Найти "дыру" в массиве и "залатать"

let arr = [1, 2, 3, 5, 6, 8, 10, 20];

function holeRep(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] != 1) {
            arr.splice(i, 0, arr[i - 1] + 1);
        }
    }
}

holeRep(arr);
alert(arr);

