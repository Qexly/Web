'use strict'

/*
Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
*/

let liCollection = document.body.firstElementChild.querySelectorAll('li');

for (let li of liCollection) {
    let liInsideCount = li.querySelectorAll('li').length;
    alert(`${li.firstChild.data.trim()}: ${liInsideCount}`);
}