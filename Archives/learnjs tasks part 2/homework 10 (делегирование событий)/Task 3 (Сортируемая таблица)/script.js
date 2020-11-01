'use strict'

let table = document.getElementById('grid');

table.addEventListener('click', (e) =>{
    if (e.target.dataset.type == undefined) return;
    let numbersArray = [];
    let tdCollection = table.querySelectorAll(`td:nth-child(${e.target.cellIndex + 1})`);
    for (let td of tdCollection) {
        if (e.target.dataset.type == "number") numbersArray.push(+td.textContent);
        if (e.target.dataset.type == "string") numbersArray.push(td.textContent);
    }
    if (e.target.dataset.type == "number") {
        numbersArray.sort((a, b) => a - b).forEach((item, index, array) => {
            tdCollection[index].textContent = item;
        });
    }
    if (e.target.dataset.type == "string") {
        numbersArray.sort().forEach((item, index, array) => {
            tdCollection[index].textContent = item;
        });
    }
    
});