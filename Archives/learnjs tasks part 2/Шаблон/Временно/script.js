'use strict'; 

function showPrompt(html, callback) {
    let modalDiv = document.getElementById('prompt-form-container');

    function onFocusDoc(e) {
        if (!modalDiv.contains(e.target)) {
            modalDiv.querySelector('input').focus();
        }
    }

    show_btn.onclick = function (e) {
        modalDiv.removeAttribute("hidden");
        document.addEventListener('focusin', onFocusDoc)
    };

    document.getElementById('prompt-message').innerHTML = html;

    modalDiv.querySelector('form').onsubmit = function(e) {
        document.removeEventListener('focusin', onFocusDoc);
        callback(modalDiv.querySelector('input').value)
        modalDiv.hidden = true;
    }

}

showPrompt('lol', alert);

