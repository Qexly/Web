'use strict'

document.onclick = function(e) { // показывает координаты точки клика
    coords.innerHTML = e.clientX + ':' + e.clientY;
};

let field = document.getElementById('field');

//Верхний левый угол
alert(`Верхний левый угол: x - ${field.offsetLeft}, y - ${field.offsetTop}`);

//Верхний левый угол (способ 2)
alert(`Верхний левый угол (способ 2): x - ${field.getBoundingClientRect().x}, y - ${field.getBoundingClientRect().y}`);

//Нижний правый угол
alert(`Нижний правый угол: x - ${field.offsetLeft + field.offsetWidth}, y - ${field.offsetTop + + field.offsetHeight}`);

//Нижний правый угол (способ 2)
alert(`Нижний правый угол (способ 2): x - ${field.getBoundingClientRect().right}, y - ${field.getBoundingClientRect().bottom}`);

//Внутренний Верхний левый угол
alert(`Внутренний Верхний левый угол: x - ${field.getBoundingClientRect().left + field.clientLeft}, y - ${field.getBoundingClientRect().top + field.clientTop}`);

//Внутреннний нижний правый
alert(`Внутреннний нижний правый: x- ${field.getBoundingClientRect().right - field.clientLeft}, y - ${field.getBoundingClientRect().bottom - field.clientTop}`);