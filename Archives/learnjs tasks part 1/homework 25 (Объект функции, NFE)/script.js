"use strict"
/*

// function makeCounter() {
//     let count = 0;
    
//     function counter() {
//         return count++;
//     }
//     counter.set = function (value) {
//         count = value;
//     };
//     counter.decrease = function() {
//         count--;
//     };

//     return counter;
// }

function makeCounter() {
    function counter() {
        return counter.count++;
    }
    counter.count = 0;
    counter.set = function(value) {
        counter.count = value;
    }
    counter.decrease = function() {
        count--;
    }
    return counter;
}

let counter = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1
  
counter.set(10); // установить новое значение счётчика
  
alert( counter() ); // 10
  
counter.decrease(); // уменьшить значение счётчика на 1
  
alert( counter() ); // 10 (вместо 11)

*/
/*
function makeCounter() {
  let count = 0;

  return function n() {
    n.count = 888;
    return count++; // есть доступ к внешней переменной "count"
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
alert(counter.count); // РАБОТАЕТ!!!
*/

function sum(value) {
    sum.count = value;
    function increase (value2) {
        sum.count += value2;
        return increase;
    }
    increase[Symbol.toPrimitive] = () => sum.count;
    return increase;
}


alert(sum(0)(1)(2)(3)(4)(5));