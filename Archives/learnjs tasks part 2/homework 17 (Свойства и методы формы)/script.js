'use strict'

let select = document.querySelector('select');
alert(select.options[select.selectedIndex].value);
let newOption = new Option('Классика', 'classic', false, true);
select.append(newOption);
