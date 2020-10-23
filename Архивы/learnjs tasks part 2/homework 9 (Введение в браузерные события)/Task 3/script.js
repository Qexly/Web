'use strict'

let spanBigArrow = document.getElementById('button');

function onClickHandler(event) {
    let ulVisible = false;
    
    return function() {
        ulVisible = !ulVisible;
        if (ulVisible) {
            document.querySelector('ul').style.display = 'block';
            document.getElementById('button').textContent = '▼ Сладости (нажми меня)!';
        } else {
            document.querySelector('ul').style.display = '';
            document.getElementById('button').textContent = '▶ Сладости (нажми меня)!';
        }  
    }
}

spanBigArrow.addEventListener('click', onClickHandler());