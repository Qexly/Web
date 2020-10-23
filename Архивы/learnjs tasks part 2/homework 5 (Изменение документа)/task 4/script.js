'use strict'

let elem = document.body;

function createCalendar(elem, year, month) {
    let daysPerMonth = ((new Date(year, month + 1) - new Date(year, month)) / 1000 / 60 / 60 / 24);
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    for (let i = 0; i < 6; i++) {
        let tr = document.createElement('tr');
        table.append(tr);

        for (let j = 0; j < 7; j++) {
            let td;
            if (i == 0) {
                td = document.createElement('th');
            } else {
                td = document.createElement('td');
            }
            td.style.border = '1px solid black'
            tr.append(td);
        }
    }
    // Инициализация текста в th
    let thCollection =  table.firstElementChild.querySelectorAll('th');
    let daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    let i = 0;
    for (let th of thCollection) {
        th.textContent = daysOfWeek[i];
        i++;
    }
    // Инициализация дней в td
    let tdArray = Array.from(table.querySelectorAll('td')).reverse();
    tdArray.forEach((td) => {
        if (daysPerMonth < 1) return;
        td.textContent = daysPerMonth--;
    })
        

    elem.prepend(table);
}

createCalendar(document.body, 1905, 1);