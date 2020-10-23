'use strict'

let thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
    if (e.target.nodeName == "IMG" && e.target.closest('a')) {
        largeImg.src = e.target.closest('a').href;
    }
    e.preventDefault();
});