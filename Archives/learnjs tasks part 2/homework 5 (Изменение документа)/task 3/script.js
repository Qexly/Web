'use strict'

//Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
};
document.body.id = 'container';

function createTree(elem, obj){
    let ul = document.createElement('ul');
    elem.append(ul);
    for (let key of Object.keys(obj)){
        if (typeof(obj[key]) == 'object' && !Object.keys(obj[key]).length > 0) {
            let li = document.createElement('li');
            li.textContent = key;
            ul.append(li);
        } else {
            let li = document.createElement('li');
            li.textContent = key;
            ul.append(li);
            createTree(ul, obj[key]); 
        }
    }
}

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере