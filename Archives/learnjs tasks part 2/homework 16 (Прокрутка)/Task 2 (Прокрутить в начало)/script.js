'use strict'

for (let i = 0; i < 2000; i++) {
    document.getElementById('matrix').append(i + '\n');
} 
   
window.addEventListener('scroll', (e) => {

    if (window.pageYOffset > document.documentElement.clientHeight){
        arrowTop.style.visibility = 'visible';
    } else {
        arrowTop.style.visibility = 'hidden';
    }

});