'use strict'

document.addEventListener('mouseover', showTip);
document.addEventListener('mouseout', showTip);

function showTip(e) {
    if (e.target.dataset.tooltip && e.type == 'mouseover') {
        let divTip = document.createElement('div');
        divTip.className = 'tooltip';
        divTip.textContent = e.target.dataset.tooltip;
        document.body.prepend(divTip);
        divTip.style.left = parseInt(e.target.getBoundingClientRect().left) + 'px';
        divTip.style.top = parseInt(e.target.getBoundingClientRect().top) - parseInt(divTip.getBoundingClientRect().height) + 'px';
        if (parseInt(divTip.style.top) < 0) {
            divTip.style.top = e.target.getBoundingClientRect().bottom + 'px';
        }
    }

    if (e.target.dataset.tooltip && e.type == 'mouseout') {
        document.querySelector('.tooltip').remove();
    }
}