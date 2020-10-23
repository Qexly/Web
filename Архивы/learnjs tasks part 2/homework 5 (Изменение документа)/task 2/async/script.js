'use strict'

let ul = document.createElement('ul');
ul.name = 'list';
document.body.prepend(ul);

/*
function listing(){
    let promise = new Promise(function(resolve, reject){
        let text = prompt('Введите текст', '');
        setTimeout(() => {
            if (!text) reject('Ввод завершен');
            resolve(text)
        }, 500);
    }).then(function(result){
        let li = document.createElement('li');
        li.prepend(result);
        ul.append(li);
        setTimeout(() => listing(), 1);
    }).catch(function(result){
        console.log(result);
    });
}
*/

function listing(){
    let promise = new Promise(function(resolve, reject){
        let text = prompt('Введите текст', ''); //В промисах нажо писать асинхронный код, иначе в случае reject catch еще не инициализирован!
        if (!text) reject('Ввод завершен');
        resolve(text);
    }).then(function(result){
        let li = document.createElement('li');
        li.prepend(result);
        ul.append(li);
        //setTimeout(() => listing(), 1000);
        listing();
    }).catch(function(result){
        console.log(result + '9');
    });
}


listing();

