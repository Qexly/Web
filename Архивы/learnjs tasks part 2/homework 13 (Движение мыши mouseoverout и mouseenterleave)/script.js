'use strict'

document.addEventListener('mouseover', showTip);
document.addEventListener('mouseout', showTip);

function showTip(e) {
    let target = e.target.closest('[data-tooltip]');
    if (target && e.type == 'mouseover') {
        let tCoords = target.getBoundingClientRect();
        let divTip = document.createElement('div');
        divTip.className = 'tooltip';
        divTip.textContent = target.dataset.tooltip;
        document.body.prepend(divTip);
        divTip.style.left = parseInt(tCoords.left) + (tCoords.width / 2) - (parseInt(divTip.getBoundingClientRect().width) / 2) + 'px';
        divTip.style.top = parseInt(tCoords.top) - parseInt(divTip.getBoundingClientRect().height) + 'px';
        if (parseInt(divTip.style.top) < 0) {
            divTip.style.top = tCoords.bottom + 'px';
        }
    }
    if (target && e.type == 'mouseout') {
        document.querySelector('.tooltip').remove();
    }
}