"use strict"

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let tr = table.rows[i];
    tr.cells[i].style.background = "red";
}