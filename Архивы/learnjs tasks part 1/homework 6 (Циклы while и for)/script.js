'use strict'
/*
for (let i = 2; i < 11; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
} */
/*
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}*/
/*
while (1) {
    let number = prompt('Введите число больше 100', '');
    if (number > 100) {
        alert(`Принято, число ${number} больше 100`);
        break;
    } else if (+number <= 100 && number != null && number != '') {
        alert(`Не принято, число ${number} не больше 100`);  
    } else if (number == '') {
        alert('Не принято, введена пустая строка');
    } else {
        alert('Ввод отменен');
    }
}*/

let number = prompt('Введите целое число, больше 1', '2');
next:
for (let i = 2; i <= number; i++) {
    let divider = i;
    let count = 0;
    while (divider > 0) {
        if (i % divider == 0) count++;
        divider--;
        if (count > 2) continue next;
    }
    if (count < 3) alert(i);
}