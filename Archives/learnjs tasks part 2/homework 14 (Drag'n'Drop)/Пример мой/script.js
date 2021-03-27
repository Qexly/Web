'use strict'; 

let ball = document.getElementById('ball');

let currentDropable = null;

function onMouseMove(e) {
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';

    ball.hidden = true;
    let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
    ball.hidden = false;
    
    if (!elemBelow) return

    let dropableEl = elemBelow.closest('.droppable');
    
    if (!dropableEl) { //Если нет под курсором дропбл элемента, то снимает с последнего цвет и обнуляем currentDropable
        if (currentDropable) currentDropable.style.backgroundColor = '';
        currentDropable = null;
        return;
    } 

    if (currentDropable != dropableEl) { //Если последний дропбл элемент не равен тому, который вновь под курсором (или currentDropable пустой)
        if (currentDropable === null) { //Если сейчас нет дропабл элемента под курсором
            dropableEl.style.backgroundColor = 'pink'; 
            currentDropable = dropableEl;
        }
        if (currentDropable !== dropableEl) { //Если уже новый элемент под курсором
            currentDropable.style.backgroundColor = '';
            dropableEl.style.backgroundColor = 'pink';
            currentDropable = dropableEl;
        }
    }
}

ball.onmousedown = function(e) {

    ball.style.position = 'absolute';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';

    document.onmousemove = onMouseMove;
}

ball.onmouseup = function(e) {
    document.onmousemove = null;
    if (currentDropable) currentDropable.style.backgroundColor = 'green';
}

ball.ondragstart = function() {
    return false;
};