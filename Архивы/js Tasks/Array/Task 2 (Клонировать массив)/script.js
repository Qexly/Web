"use strict"

function toCloneArr(array) {
    return array.slice();
}

let arr = [1, 2, 3];
let arrClone = toCloneArr(arr);
alert(`${arr} и ${arrClone}`);
alert(arr == arrClone);