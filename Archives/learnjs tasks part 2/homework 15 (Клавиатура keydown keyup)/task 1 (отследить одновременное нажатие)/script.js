'use strict'

function runOnKeys(func, ...codes) {
    let pressed = new Set;

    document.addEventListener('keydown', (e) =>{
        pressed.add(e.code);
        
        for (let code of codes) {
            if (!pressed.has(code)) return;
        }

        func();

        pressed.clear();// во время показа alert, если посетитель отпустит клавиши - не возникнет keyup

    });

    document.addEventListener('keyup', (e) =>{
        pressed.delete(e.code);
    });

}

runOnKeys(
  () => alert("Привет!"),
  "KeyQ",
  "KeyW"
);