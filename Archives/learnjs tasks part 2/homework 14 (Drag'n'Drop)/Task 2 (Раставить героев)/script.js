'use strict'

let docHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

document.addEventListener('mousedown', (event) => {
    let target = event.target; 

    if (target.classList.contains("draggable")) {

        function toMoveHero (e) {
            let targetCoords = target.getBoundingClientRect();
            if (e.clientY + window.pageYOffset  >= docHeight - (targetCoords.height / 2)) return;
            
            target.style.position = 'absolute';
            target.style.left = e.clientX - targetCoords.width / 2  + 'px';
            target.style.top = e.clientY - (targetCoords.height / 2) + window.pageYOffset + 'px';
            
            if (targetCoords.bottom >= document.documentElement.clientHeight - 2) {
                window.scrollBy(0, 10);
            } else if (targetCoords.top <= 2) {
                window.scrollBy(0, -10); 
            }
        }

        document.addEventListener('mousemove', toMoveHero);
        
        document.addEventListener('mouseup', removeListener);
        function removeListener() {
            document.removeEventListener('mousemove', toMoveHero);
        }

    }

});

document.ondragstart = function() {
    return false;
};