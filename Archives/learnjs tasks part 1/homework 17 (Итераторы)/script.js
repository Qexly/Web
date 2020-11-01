'use strict'

    let generateNumbers = {
        start: 1,
        end: 10,
        [Symbol.iterator]: function() {
            let current = this.start;
            let last = this.end; 
            return { // [Symbol.iterator]() должна вернуть объект с функцией next()
                next() {
                    if (current <= last) {
                        return { //Метод next() тоже возвращает объект
                            done: false,
                            value: current++
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }  
        }
    }

    for (let number of generateNumbers) {
        console.log(number); // Выведет от 1 до 10
    }

