'use strict'

let ul = document.getElementById('ul');

ul.addEventListener('mousedown', (e) => {
    e.preventDefault();
});

ul.addEventListener('click', (e) => {
    let liCollection = ul.querySelectorAll('li');
    if (!e.ctrlKey) {
        for (let li of liCollection) {
            if (li.classList.contains("selected")) li.classList.remove("selected");
        }
    }
    if (e.target.nodeName == "LI") e.target.classList.add("selected");
})