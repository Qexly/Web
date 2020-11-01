"use strict"
// которая удалит свойства, ссылающиеся на meetup
let room = {
  number: 23,
  //occupiedBy: meetup
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room,
  //self: meetup
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

let json = JSON.stringify(meetup, function replacer(key, value) {
    return (value == meetup && key != "") ? undefined : value ;
});

let json2 = JSON.stringify(room, function replacer(key, value) {
    return ((value == room && key != "") || (this == value)) ? undefined : value ;
});

alert(json);
alert(json2);
