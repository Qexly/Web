'use strict'

let thumb = document.getElementsByClassName('thumb')[0];

thumb.addEventListener('mousedown', (e) => {
    let sliderCoords = slider.getBoundingClientRect();

    function toMoveThumb(eventMove) {
        let HalfthumbWidth = parseInt(getComputedStyle(thumb).width) / 2
        let mouseInsideSlider = eventMove.clientX - sliderCoords.left;
        if (mouseInsideSlider > sliderCoords.width - HalfthumbWidth || mouseInsideSlider < 0 + HalfthumbWidth) return;
        thumb.style.left = mouseInsideSlider - (parseInt(getComputedStyle(thumb).width) / 2) + 'px';
    }

    document.addEventListener('mousemove', toMoveThumb);
    
    function removeListener() {
        document.removeEventListener('mousemove', toMoveThumb);
    }

    document.addEventListener('mouseup', removeListener);
    
});

thumb.ondragstart = function() {
    return false;
};
