"use strict"

//выводит число каждую секунду, начиная от from и заканчивая to.
function printNumbers(from, to) {
    let timerId = setTimeout(function a(){
        if (from <= to) {
            alert(from++);
            timerId = setTimeout(a, 1000);
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}

printNumbers(5, 10);

/*
////выводит число каждую секунду, начиная от from и заканчивая to.
function printNumbers(from, to) {
    let timerId = setInterval(() => {
        if (from <= to) {
            alert(from++);
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}

printNumbers(5, 10);
*/