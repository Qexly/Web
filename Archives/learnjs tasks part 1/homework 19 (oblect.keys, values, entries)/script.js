"use strict"
/*
//Превратить в массив, увеличить в два раза числовые свойства и преобразовать обратно в объект
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
    sayHi() {
        alert("Привет");
    }
};
  
let doublePrices = Object.fromEntries(
// преобразовать в массив, затем map, затем fromEntries обратно объект
Object.entries(prices).map( ([key, value]) => {
    if (typeof(value) == "number") {
            return [key, value * 2];
    } else {
        return [key, value];
    }
    })
);
alert(doublePrices.meat); // 8
  */
/*
 let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
  };

  function sumSalaries(salaries) {
    let count = 0;
    for (let item of Object.values(salaries)) {
        count += item;
    }
    return count;
  }
  
  alert( sumSalaries(salaries) ); // 650
*/

let user = {
    name: 'John',
    age: 30
  };
  
  alert(count(user)); // 2

  function count(obj) {
    return Object.keys(obj).length;
  }


