'use strict'

let count = {player: 0, computer: 0};

let [playerDiv, computerDiv] = document.querySelectorAll('.tabloid span');

let game_field = document.getElementById('game_field');

let tdCollection = game_field.querySelectorAll('td');

let emptyTdCollection; //хранятся свободные клетки
let turn; // true - очередь игрока, false - комьютера
let playersCells;//хранятся клетки, которые выбрал игрок
let computersCells;//хранятся клетки, которые выбрал компьютер

const reset = () => { // в случае чьей либо победы или ничьи, вызывется, чтобы сбросить все значения для новой партии
    for (let td of tdCollection) {
        td.textContent = '';
    }

    emptyTdCollection = new Map();
    [].forEach.call(tdCollection, (td, index) => emptyTdCollection.set(td, index));
    playersCells = new Map(); 
    computersCells = new Map();
    turn = true; 
}

reset(); //так же может использоваться для начальной инициализации

const checkTheWin = (participantsMap) => { //Проверяет, если в Map participantsMap  нужная комбинации индексов клеток для победы
    let participantsCellsArray = Array.from(participantsMap.values()); //чтобы получить текущие индексы в Map и на коллекции работал includes

    let myIncludes = (a, b, c) => {
        let name = turn ? 'Player' : 'Computer'
        let includes = participantsCellsArray.includes.bind(participantsCellsArray); //для краткости 
        if (includes(a) && includes(b) && includes(c)) {
            setTimeout(() => alert(`${name} win`), 0);
            setTimeout(() => reset(), 0);
            turn ? count.player++ : count.computer++;
            playerDiv.textContent = count.player; 
            computerDiv.textContent = count.computer;
            return true;
        }
        return false
    }

    let exit = myIncludes(0, 1, 2) || myIncludes(3, 4, 5) || myIncludes(6, 7, 8) 
        || myIncludes(0, 3, 6) || myIncludes(1, 4, 7) || myIncludes(2, 5, 8) 
        || myIncludes(0, 4, 8) || myIncludes(2, 4, 6); //если хоть одна комбинация нашлась в Map, то текущий участник - победитель
    
    if (exit) return;

    turn = !turn;
    turn === false ? setTimeout(() => game_field.dispatchEvent(new Event('click'), 1000)) : null; //если сейчас настала очередь компьютера - пусть сгенерирует клик на игровом поле
}

game_field.addEventListener('click', function(e) {
    if (emptyTdCollection.size === 0) {
        alert('Ничья!');
        setTimeout(() => reset(), 0);
        return;
    }
    if (turn) { //обработка клика пользователя
        let target = e.target;

        if (target.tagName !== 'TD') return;

        if (!emptyTdCollection.has(target)) {
            alert('Клетка занята!');
            return;
        }

        target.textContent = String.fromCodePoint(215);
        playersCells.set(target, emptyTdCollection.get(target));
        emptyTdCollection.delete(target);
        checkTheWin(playersCells)
    } else { //обработка клика компьютера с выбором случайной клетки, которая свободна
        let emptyTdArr = Array.from(emptyTdCollection.keys());
        let randomIndex = Math.floor(Math.random() * emptyTdArr.length);   
        let target = emptyTdArr[randomIndex];
        target.textContent = String.fromCodePoint(9675);
        computersCells.set(target, emptyTdCollection.get(target));
        emptyTdCollection.delete(target);
        setTimeout(() => checkTheWin(computersCells), 100);
    }
});

