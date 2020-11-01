'use strict'

// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
let one = document.getElementById('one');
let html = '<li>2</li><li>3</li>';
one.insertAdjacentHTML('afterend', html);