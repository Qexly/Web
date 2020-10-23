'use strict'

function getScrollWidth() {
    let div = document.createElement('div');
    div.style.overflow = 'scroll';
    div.style.width = '100px', div.style.height = '100px';
    document.body.prepend(div);
    let result = div.offsetWidth - div.clientWidth;
    div.remove();
    return result;
}

alert(getScrollWidth());