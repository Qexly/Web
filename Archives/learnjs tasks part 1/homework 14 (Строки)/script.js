'use strict'
/*
function ucFirst(str) {
    if (!str.length) {return ""};
    let firstLetter = str[0].toUpperCase();
    let withoutFirstLetter = str.substr(1, str.length - 1);
    return firstLetter + withoutFirstLetter;
}

alert(ucFirst(prompt("Введите слово", "")));
*/
/*
function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx') || false;
}
alert(checkSpam(prompt("Введите слово", "")));
*/

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1) + "…" ;
    }
    return str;
}