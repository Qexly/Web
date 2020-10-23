'use strict'
/*
function unique(arr) {
    return Array.from(new Set(arr).keys());
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
*/
/*
function aclean(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i].toLowerCase().split('').sort().join(), arr[i]);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
*/
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
map.set(__proto__, 5);
map.set('__proto__', 6);

let obj = map.entries(); 