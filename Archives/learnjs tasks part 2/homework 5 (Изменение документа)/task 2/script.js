'use strict'

/*
Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.
*/

//Не асинхронный вариант:

let ul = document.createElement('ul');
ul.name = 'list';
document.body.prepend(ul);

function createLi () {
    while (1) {
        let text = prompt('Введите текст', '');
        if (!text) return;
        let li = document.createElement('li');
        li.prepend(text);
        ul.append(li);
    }
}

createLi();


