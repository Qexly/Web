'use strict'

let ulContainer = document.getElementById('tree');

ulContainer.addEventListener('click', (e) => {
    if (e.target.nodeName == 'SPAN' && e.target.parentElement.nodeName == "LI") {
        if (e.target.parentElement.querySelector('ul') == null) return; 
        e.target.parentElement.querySelector('ul').hidden = !e.target.parentElement.querySelector('ul').hidden;
    }
});