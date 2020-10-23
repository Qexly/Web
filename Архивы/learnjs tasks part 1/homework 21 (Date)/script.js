"use strict"
/*
//20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
alert(new Date("2012-01-20T03:12"));
*/
/*
function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            return "ВС";
            break;
        case 1:
            return "ПН";
            break;
        case 2:
            return "ВТ";
            break;
        case 3:
            return "СР";
            break;
        case 4:
            return "ЧТ";
            break;
        case 5:
            return "ПТ";
            break;
        case 6:
            return "СБ";
            break;
        
    }
}
*/
/*
function getLocalDay(date) {
    switch (date.getDay()) {
        case 0:
            return 7;
            break;
        case 1:
            return 1;
            break;
        case 2:
            return 2;
            break;
        case 3:
            return 3;
            break;
        case 4:
            return 4;
            break;
        case 5:
            return 5;
            break;
        case 6:
            return 6;
            break;
        
    }
}
*/
/*
//возвращающую число, которое было days дней назад от даты date.
function getDateAgo(date, days) {
    let millisecondsInDay = new Date(1970, 0, 2).getTime() - (new Date().getTimezoneOffset() * 60000);
    return new Date(date.getTime() - millisecondsInDay * days).getDate();
}
*/

/*
//возвращающую последнее число месяца
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month);
    let millisecondsInMonth = new Date(year, month + 1, 1).getTime() - new Date(year, month, 1).getTime();
    return millisecondsInMonth / 1000 / 3600 / 24;
}
*/

/*
// количество секунд с начала сегодняшнего дня.
function getSecondsToday() {
    return (Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000;
}

alert(getSecondsToday());
*/

/*
function getSecondsToTomorrow() {
    return (86400000 - (Date.now() - new Date().setHours(0, 0, 0, 0))) / 1000;
}

alert(getSecondsToTomorrow());
*/

