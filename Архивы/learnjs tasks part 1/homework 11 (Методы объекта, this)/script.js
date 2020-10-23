'use strict'
/*
let calculator = {
    read: function(a, b){
        this.number1 = +prompt("Введите первое число", "");
        this.number2 = +prompt("Введите второе число", "");
    },
    sum: function() {
        return (this.number1 + this.number2);
    },
    mul: function() {
        return(this.number1 * this.number2);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
    }
  };

  ladder.up().up().down().showStep();