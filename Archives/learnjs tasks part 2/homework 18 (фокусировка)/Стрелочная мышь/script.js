"use strict"

let mouse = document.getElementById('mouse');
mouse.tabIndex = 0;

mouse.addEventListener('keydown', (e) => {

    if (mouse == document.activeElement) {
        if (mouse.style.position != 'relative') {
            mouse.style.position = 'relative';
            mouse.style.top = '0px';
            mouse.style.left = '0px'
        } 

        switch (e.code) {
            case 'ArrowUp':
                mouse.style.top = parseInt(mouse.style.top) - mouse.getBoundingClientRect().height + 'px';
                break;
            case 'ArrowDown':
                mouse.style.top = parseInt(mouse.style.top) + mouse.getBoundingClientRect().height + 'px'; 
                break;
                case 'ArrowLeft':
                    mouse.style.left = parseInt(mouse.style.left) - mouse.getBoundingClientRect().width + 'px'; 
                    break;
                case 'ArrowRight':
                    mouse.style.left = parseInt(mouse.style.left) + mouse.getBoundingClientRect().width + 'px'; 
                    break;
        }           
    }

});