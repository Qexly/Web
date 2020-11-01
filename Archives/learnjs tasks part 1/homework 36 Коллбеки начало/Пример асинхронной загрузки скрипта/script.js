"use strict"
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback();

  document.head.append(script);
}

loadScript('script2.js', function() { //в этом коллбеке доступны все функции и переменные скрипта два
    // эта функция вызовется после того, когда загрузится скрипт
    newFunction(); // теперь всё работает
  });