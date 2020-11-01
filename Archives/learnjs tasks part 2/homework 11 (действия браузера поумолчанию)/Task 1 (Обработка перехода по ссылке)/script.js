'use strict'

let contents = document.getElementById('contents');

contents.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        if (!confirm('Перейти по ссылке?')) {
            e.preventDefault();
        }
    }
});