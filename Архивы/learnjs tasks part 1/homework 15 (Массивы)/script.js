'use strict'
/*
let str = ''; 
let styles = ["Джаз", "Блюз"];
str += styles;
styles.push("Рок-н-ролл");
str += "\n" + styles;
let middle = Math.floor((styles.length - 1) / 2);
styles[middle] = "Классика";
str += "\n" + styles;
alert(styles.shift());
str += "\n" + styles;
styles.unshift("Рэп", "Регги");
str += "\n" + styles;
alert(str);
*/
/*
function sumInput() {
    let myArray = [];
    let element;
    while (1) {
        element = prompt("Введите число", "");
        if (((!isFinite(element) || !element) & element != 0) || element === '') {
            break;
        } else {
            myArray.push(element);
        }
    } 
    let count = 0;
    for (let element of myArray) {
        count += +element;
    }
    
    return count;
}

alert(sumInput()); 
*/

function getMaxSubSum(arr) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];   
            max = (sum > max) ? sum : max;
        } 
        sum = 0;
    }
    return max;
}

alert(getMaxSubSum([-1, 2, 3, -9, 11]));