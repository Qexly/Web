'use strict'

let field = document.getElementById('field');

function fieldOnClick(event) {
    field.style.position = 'relative'; //Закоментить, если юзаешь pageX/Y
    ball.style.top = /*event.pageY + 'px';*/ event.clientY - field.getBoundingClientRect().top - field.clientTop - (ball.getBoundingClientRect().height / 2) + 'px';
    ball.style.left = /*event.pageX + 'px';*/ event.clientX - field.getBoundingClientRect().left - field.clientLeft -(ball.getBoundingClientRect().width / 2) + 'px';
}

field.addEventListener('click', fieldOnClick);