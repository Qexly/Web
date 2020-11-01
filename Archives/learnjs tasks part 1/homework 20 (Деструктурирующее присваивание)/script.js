"use strict"
/*
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // деструктуризация разбита на несколько строк для ясности
  let {
    size, // положим size сюда,
    items: [item1, item2], // добавим элементы к items
    title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut
  */
/*
let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false } = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false  
*/

let salaries = {
    "Left": 1001,
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Dick": 49
};

function topSalary(salaries) {
    if (Object.keys(salaries).length == 0) return;
    let [maxName] =  Object.entries(salaries).sort((a, b) => b[1] - a[1])[0];
    return maxName || null;
}

alert(topSalary(salaries));

