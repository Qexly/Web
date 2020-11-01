"use strict"

let array = /*[1, 8, 7, 9, 5, 4, 6, 2, 3, 10]*/ [1, 2, 3, 5, 4, 6, 7, 8, 9, 10];

function BubbleSort(arr) {

    alert(`Исходный массив равен ${arr}`);
    let counter = 0;
    outer:
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j+1]) {
                let a = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = a;
                flag = true;
            }
            counter++
        }
        if (flag == false) break outer;
    } 

    alert(`Отсортированный массив равен ${arr}, сделано ${counter} проверок`);
}

BubbleSort(array);