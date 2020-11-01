'use strict'

function showPrompt(html, callback) {
    let formContainer = document.getElementById('prompt-form-container');
    let form = document.forms[0];
    form.querySelector('#prompt-message').innerHTML = html; 
    formContainer.hidden = false;
    document.forms[0][0].focus();
    
    form.addEventListener('submit', (e) => {
        callback(form.elements[0].value);
    });

    document.addEventListener('focusin', (e) => {
       if (!formContainer.hidden && !form.contains(e.target)) {
        document.forms[0][0].focus();
       }
    });
}

let button = document.body.querySelector('button');
button.addEventListener('click', (e) => {
    showPrompt('Введите что-нибудь<br>...умное :)', alert);
})

