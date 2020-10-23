"use strict"

/*Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены 
повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).*/

let array = ["php", "php", "css", "css", "script", "script", "html", "css", "html", "java" ];

function removeDuplicates(arr) {

    for (let i = 0; i < arr.length; i++){
        if (arr.includes(arr[i], i+1)) {
            arr.splice(i, 1);
            i -= 1;
        }
    }

    return arr;
}

alert(removeDuplicates(array));