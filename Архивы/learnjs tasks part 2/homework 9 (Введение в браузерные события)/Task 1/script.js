'use strict'

let button = document.getElementById('hider');
button.addEventListener('click', toHide);

function toHide(event){
    document.getElementById('text').style.display = 'none';
}