'use strict'

function showNotification({top = 0, right = 0, className, html}) {
    document.body.insertAdjacentHTML('afterbegin', 
    `<div id='js' class="notification ${className}" style="top: ${top}px; right: ${right}px">${html}</div>`);   
    setTimeout(() => document.getElementById('js').remove(), 1500);     
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
  });
}, 2000);