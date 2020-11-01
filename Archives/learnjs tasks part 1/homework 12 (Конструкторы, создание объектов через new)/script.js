'use strict'
/*
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
*/
/*
function Calculator() {
    this.read = function() { 
        this.number1 = +prompt("Введите первое число", "0");
        this.number2 = +prompt("Введите второе число", "0");
    },
    this.sum = function () {
       return this.number1 + this.number2;
    },
    this.mul = function () {
        return this.number1 * this.number2;
     }
}

let calculator = new Calculator();

calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Введите число","0");
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений