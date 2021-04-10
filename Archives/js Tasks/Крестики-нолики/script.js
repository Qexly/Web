'use strict'

let playersWinningСombinations; //возможные выигрышные комбинации игрока на момент времени
let computersWinningСombinations; //возможные выигрышные комбинации комп-ра на момент времени

let count = {player: 0, computer: 0};

let [playerDiv, computerDiv] = document.querySelectorAll('.tabloid span');

let game_field = document.querySelector('.gameField'); //игровое поле

let cellsCollection = game_field.querySelectorAll('.gameField__cell'); //все клетки игрового поля

let emptyCellsCollection; //хранятся свободные клетки
let turn; // true - очередь игрока, false - комьютера
let playersCells;//хранятся клетки, которые выбрал игрок
let computersCells;//хранятся клетки, которые выбрал компьютер

const reset = () => { // в случае чьей либо победы или ничьи, вызывется, чтобы сбросить все значения для новой партии
    for (let cell of cellsCollection) {
        cell.textContent = ''; //очищение всех клеток
    }

    computersWinningСombinations = ['012', '345', '678', '036', '147', '258', '048', '246'];
    playersWinningСombinations = ['012', '345', '678', '036', '147', '258', '048', '246'];
    emptyCellsCollection = new Map();//хранятся свободные клетки
    [].forEach.call(cellsCollection, (cell, index) => emptyCellsCollection.set(cell, index)); //с помощью forEach пройтись по коллекции DOM-элементов и добавить их в Map свободных клеток
    playersCells = new Map(); //хранятся клетки, которые выбрал игрок
    computersCells = new Map();//хранятся клетки, которые выбрал компьютер
    turn = true; // true - очередь игрока, false - комьютера
}

const checkTheWin = (participantsMap) => { //Проверяет, если в Map participantsMap  нужная комбинации индексов клеток для победы
    let participantsCellsArray = Array.from(participantsMap.values()); //чтобы получить текущие индексы в Map и на коллекции работал includes

    let myIncludes = (a, b, c) => {
        let name = turn ? 'Player' : 'Computer';
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

const doDefMove = (playersCellsIndexes) => { //комп. проверяет, есть ли выигрышная стратегия у игрока и блокирует, если таковая имеется

    if (checkWinMove() !== false) { //также, если у комп-ра есть выигрышная стратегия, требующая последнего хода - он его сделает
        computerMove(checkWinMove());
        setTimeout(() => checkTheWin(computersCells), 100);
        return;
    }

    let winChars = ''; //попадают два индекса клеток, которые есть в одной из выигрышных стратегий
    let winnerCombine = playersWinningСombinations.find((item, index) => {
        let localwinChars = '';
        let count = 0;
        for (let char of playersCellsIndexes) { //комп. нашел два индекса, которые входят в одну из выигрышных стратегий и занял последний индекс из выигрышной стратегии
            if (item.includes(char)) {
                count++;
                localwinChars = localwinChars + char;
                if (count > 1) {
                    playersWinningСombinations[index] = 'null'; //теперь такой выигрышной стратегии нет
                    winChars = localwinChars;
                }
            }
        }
        return count > 1;
    });

    if (!winnerCombine) {//Если игрок сходил без выигрышной стратегии
        randomCompMove();
        setTimeout(() => checkTheWin(computersCells), 100);
        return;
    }

    for (let char of winnerCombine) { //комп. перекрывает выигрышную стратегию игроку
        if (!winChars.includes(char)) {
            computerMove(Number(char));
            setTimeout(() => checkTheWin(computersCells), 100);
            return;
        }
    }
}

const checkWinMove = () => { //комп. проверяет, есть ли у него выигрышная стратегия, чтобы сделать победный ход
    let computersCellsIndexes = Array.from(computersCells.values()).join('');

    let winChars = ''; //попадают два индекса клеток, которые есть в одной из выигрышных стратегий
    let winnerCombine = computersWinningСombinations.find((item, index) => {
        let localwinChars = '';
        let count = 0;
        for (let char of computersCellsIndexes) { //компьютер нашел два индекса, которые входят в одну из выигрышных стратегий и занял последний индекс из выигрышной стратегии
            if (item.includes(char)) {
                count++;
                localwinChars = localwinChars + char;
                if (count > 1) {
                    winChars = localwinChars;
                }
            }
        }
        return count > 1;
    });

    if (!winnerCombine) return false;

    for (let char of winnerCombine) { //комп. находит нужный индекс для победы
        if (!winChars.includes(char)) {
            return +char; 
        }
    }
 //вернет индекс, если есть стратегия, либо false
}

const computerMove = (index) => { //функция занятия клетки комп-ом
    let target = cellsCollection[index];
    target.textContent = String.fromCodePoint(9675);
    computersCells.set(target, emptyCellsCollection.get(target));
    emptyCellsCollection.delete(target);
    playersWinningСombinations.forEach((comb, i) => {
        if (comb.includes(index)) playersWinningСombinations[i] = 'null';
    })
}

const randomCompMove = () => { //используется, если ни у кого нет выигрышной стратегии

    let emptyTdIndexes = Array.from(emptyCellsCollection.values());
    let cornerIndex = emptyTdIndexes.find(index => index === 0 || index === 2 || index === 6 || index === 8); //желательно занять угол
    if (cornerIndex != undefined) {
        computerMove(cornerIndex);
        return;
    }

    let emptyTdArr = Array.from(emptyCellsCollection.keys());
    let randomArrIndex = Math.floor(Math.random() * emptyTdArr.length);
    let randomCell = emptyTdArr[randomArrIndex];
    let randomIndex = emptyCellsCollection.get(randomCell); //если угол занят - выберем из того, что осталось
    computerMove(randomIndex);
}

const isTookEdge = (playersCellsIndexes) => { //занял ли игрок первым ходом угловую клетку?
    switch (playersCellsIndexes[0]) {
        case '0':
        case '2':
        case '6':
        case '8':
            return true;
        default:
            return false;
    }
}

reset(); //так же может использоваться для начальной инициализации

game_field.addEventListener('click', function(e) {

    if (emptyCellsCollection.size === 0) { //если пустые клетки кончились - это ничья
        alert('Ничья!');
        setTimeout(() => reset(), 0);
        return;
    }
    if (turn) { //обработка клика пользователя
        let target = e.target;
        
        if (!target.classList.contains("gameField__cell")) return; //если клик был не по ячейке - нас это не интересует

        if (!emptyCellsCollection.has(target)) { //если клетки нет в списке пустых - то по ней нельзя кликать
            alert('Клетка занята!');
            return;
        }

        let index = emptyCellsCollection.get(target);

        target.textContent = String.fromCodePoint(215); //нарисовать крестик
        playersCells.set(target, index); //добавить клетку в список занятых игроком [domEl, index]
        emptyCellsCollection.delete(target);// теперь эта клетка не в списке свободных

        computersWinningСombinations.forEach((comb, i) => {
            if (comb.includes(index)) computersWinningСombinations[i] = 'null';
        })

        setTimeout(() => checkTheWin(playersCells), 100);
    } else { //обработка клика компьютера с выбором клетки, которая свободна
        let playersCellsIndexes = Array.from(playersCells.values()).join(''); //История шагов игрока и компьютера, на основании
        let computersCellsIndexes = Array.from(computersCells.values()).join(''); // которой комп. выбирает стратегию
        ///Игрок занял центр первым ходом
        if (playersCellsIndexes === '4' && computersCellsIndexes === '') {
            playersWinningСombinations[0] = 'null';
            playersWinningСombinations[3] = 'null';
            playersWinningСombinations[6] = 'null';
            computerMove(0);
            setTimeout(() => checkTheWin(computersCells), 100);
            return;
        }

        if (playersCellsIndexes.startsWith('4') && computersCellsIndexes.startsWith('0')) {
            doDefMove(playersCellsIndexes);
            return;
        }
        ///Игрок не занял центр и не угловую позицию первым ходом
        if (playersCellsIndexes !== '4' && computersCellsIndexes === '') {
            computerMove(4);
            setTimeout(() => checkTheWin(computersCells), 100);
            return;
        }
 
        if (isTookEdge(playersCellsIndexes) && computersCellsIndexes !== '') { //игрок занял угол первым ходом и комп. занял центр
            if (computersCellsIndexes == '4' && playersCellsIndexes.includes(2) && playersCellsIndexes.includes(6)) {
                computerMove(3);
                setTimeout(() => checkTheWin(computersCells), 100);
                return;
            }
            if (computersCellsIndexes == '4' && playersCellsIndexes.includes(0) && playersCellsIndexes.includes(8)) {
                computerMove(3);
                setTimeout(() => checkTheWin(computersCells), 100);
                return;
            }
            doDefMove(playersCellsIndexes);
            return;
        }

        if (!isTookEdge(playersCellsIndexes) && computersCellsIndexes !== '') { //игрок не занял угол первым ходом и комп. занял центр
     
            if (isTookEdge(playersCellsIndexes[1])) { //второй ход игрока - угловая клетка
                doDefMove(playersCellsIndexes);
                return;
            } 

            if (!isTookEdge(playersCellsIndexes[1]) && !computersCellsIndexes[1]) { //второй ход игрока - не угловая клетка. второй ход, в угол

                if (!playersCellsIndexes.includes(1)) {
                    computerMove(8);
                    setTimeout(() => checkTheWin(computersCells), 100);
                } else {
                    computerMove(0);
                    setTimeout(() => checkTheWin(computersCells), 100);
                }
               
                return;  
            }

            if (!isTookEdge(playersCellsIndexes[1]) && computersCellsIndexes[1]) { //второй ход игрока - не угловая клетка. 
                doDefMove(playersCellsIndexes);
            }
        }
    }
});


