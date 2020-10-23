'use strict'

window.addEventListener('scroll', (e) => {
  let lastP = document.body.querySelector('p:last-of-type');
  if (lastP.getBoundingClientRect().top < document.documentElement.clientHeight) {
    let text = new Date().toString();
    let p = document.createElement('p');
    p.textContent = text;
    lastP.after(p);
  }
});

//Начальная инициализация (можно не вешать этот обработчик, если уже есть контент)
window.addEventListener('load', (e) => {
  while(1){
    if(document.documentElement.offsetWidth == window.innerWidth) {
      let text = new Date().toString();
      let p = document.createElement('p');
      p.textContent = text;
      document.body.querySelector('h1').after(p);
    } else {
      break;
    }
  }
}); 
