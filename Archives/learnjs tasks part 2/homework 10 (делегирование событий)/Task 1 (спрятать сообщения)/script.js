'use strict'

let container = document.getElementById('container');

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-button')) {
        let pane = e.target.closest('.pane');
        pane.remove();
    }
});
