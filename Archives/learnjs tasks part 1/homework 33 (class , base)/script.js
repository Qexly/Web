'use strict'
/*
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// класс - это функция
alert(typeof User); // function

// ...или, если точнее, это метод constructor
alert(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
alert(User.prototype.sayHi); // alert(this.name);

// в прототипе ровно 2 метода
alert(Object.keys(User.prototype)); // constructor, sayHi

let des = Object.getOwnPropertyDescriptors(User.prototype)
alert(JSON.stringify(des, null, 2));
*/

/*
function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date(); //объект Date с текущими датой и временем.
  
      let hours = date.getHours(); // получить сколько сейчас часов
      if (hours < 10) hours = '0' + hours; // если меньше 10 часов, то рисуем 09 (пример)
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins; // так же рисуем и минуты
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs; // так же рисуем и секунды
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
}
  
let clock = new Clock({template: 'h:m:s'});
clock.start();
*/
/*
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

let clock = new Clock({template: 'h:m:s'});
clock.start();
*/

class User {

  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }

}

let user = new User("Иван");
alert(user.name); // Иван

user = new User(""); // Имя слишком короткое.