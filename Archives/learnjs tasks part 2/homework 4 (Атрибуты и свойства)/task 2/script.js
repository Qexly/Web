'use strict'

/*Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.
*/

let links = document.body.children[1].querySelectorAll('a');

for (let link of links) {
    if (link.matches('a[href*="://"]') && !link.matches('a[href^="http://internal.com"]')) {
        link.style.color = 'orange';
    }
}