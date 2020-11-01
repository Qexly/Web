'use strict'

alert( elem.getAttribute('About') ); // (1) 'Elephant', чтение

elem.setAttribute('Test', 123); // (2), запись

alert( elem.outerHTML ); // (3), посмотрим, есть ли атрибут в HTML (да)

for (let attr of elem.attributes) { // (4) весь список
    alert( `${attr.name} = ${attr.value}` );
}

// Убедился, что элементы коллекции elem.attributes - объекты, у которых есть свойство-имя атрибута и свойство-значение атрибута