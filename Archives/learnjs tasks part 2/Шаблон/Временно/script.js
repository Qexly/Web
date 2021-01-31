'use strict'

document.getElementById('ul').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.ctrlKey && e.target.closest('li')) {
        e.target.classList.toggle("selected"); 
    } else if (!e.ctrlKey) {
        for (let li of e.currentTarget.querySelectorAll('li')) {
            li.classList.remove("selected");
        }
        e.target.classList.add("selected");
    }
});

document.getElementById('ul').addEventListener('mousedown', (e) => {
    e.preventDefault();
});