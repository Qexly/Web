'use strict'

/*Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.*/

let elem = document.body.querySelector('div[data-widget-name]');
alert(elem.getAttribute('data-widget-name'));