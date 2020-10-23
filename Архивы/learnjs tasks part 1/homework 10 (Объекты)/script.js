'use strict'
/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/

/*
function isEmpty(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count > 0 ? false : true;
}
*/
/*
let sum = 0;

function toSumSalaries(obj) {
    let count = 0;
    for (let key in obj) {
        count += obj[key];
    }  
    return count;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

sum = toSumSalaries(salaries);

alert(sum);
*/

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == "number") {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);