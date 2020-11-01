"use strict"
/*
//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b
function sum(num1){
    return function (num2) {
        return +num1 + +num2;
    }
}

alert(sum(1)(2));
alert(sum(5)(-1));
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return (item, index, arry) => item >= a && item <=b;
}
alert(arr.filter(inBetween(3, 6)));

function inArray(array) {
    return  (item, index, arry) => array.includes(item);
}

alert( arr.filter(inArray([1, 2, 10])) );
*/
/*
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return function (a, b) {
        return (a[fieldName] < b[fieldName] ? 1 : -1);
    }
}

users.sort(byField("age"));
alert();
users.sort(byField("name"));
*/

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let num = i;
    let shooter = function() { // функция shooter
      alert( num ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...