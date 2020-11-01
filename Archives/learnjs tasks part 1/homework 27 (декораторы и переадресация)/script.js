"use strict"
/*
function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

function wrapper(func) {
    f.calls = [];
     function f() {
        f.calls.push(Array.from(arguments));
        return func.call(this, ...arguments);
    }
    return f;
}

work = wrapper(work);
work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }
*/
/*
function f(x) {
  alert(x);
}

function delay(f, ms) {
    return function() {
        return setTimeout(() => f.apply(this, arguments), ms);
    }
}
// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
//Вызываем обертки 
f1000("test1"); // показывает "test" после 1000 мс
f1500("test2"); // показывает "test" после 1500 мс
*/
/*
function func(x) {
  console.log(x);
};

function debounce(f, ms) {
    timer.lastCall = 0;
    function timer() {
        if (Date.now() - timer.lastCall > ms) {
            timer.lastCall = Date.now();
            return f.apply(this, arguments);
        } else {
            console.log(`${Array.from(arguments)} слишком рано `);
        }
    }
    return timer;
}

let f = debounce(func, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
*/

function func(x) {
  console.log(x);
};

function throttle(f, ms) {
    let cooldown = false;
    let savedArgs, savedThis;
    return function wrapper () {
        if (cooldown) {
            savedArgs = arguments;
            savedThis = this
            return;
        } 
        cooldown = true;
        setTimeout(() => {
            cooldown = false
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
            }
        }, ms);
        return f.apply(this, arguments);
    } 
}