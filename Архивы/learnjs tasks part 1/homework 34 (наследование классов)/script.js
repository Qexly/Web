'use strict'
/*
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);
*/

class Clock {
    
    constructor({template}){
        this.template = template;
        this.timer = null;
    }

    render() {
        let date = new Date(); //объект Date с текущими датой и временем.
  
        let hours = date.getHours(); // получить сколько сейчас часов
        if (hours < 10) hours = '0' + hours; // если меньше 10 часов, то рисуем 09 (пример)
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins; // так же рисуем и минуты
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs; // так же рисуем и секунды
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output); 
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);  
    }
}



class ExtendedClock extends Clock {

    constructor(template, precision = 1000) {
        super(template);
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), this.precision); 
    }
}

let clock = new ExtendedClock({template: 'h:m:s'}, 3000 );
clock.start();