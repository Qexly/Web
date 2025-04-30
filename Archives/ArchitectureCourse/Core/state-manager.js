import {GAME_STATUSES} from './constants.js';

const _state = {
    gameStatus: GAME_STATUSES.SETTINGS,
    googleJumpInterval: 1000,
    settings: {
        gridSize: {
            rows: 4,
            columns: 4
        },
        pointsToLose: 5,
        pointsToWin: 5,
    },
    positions: {
        google: {
            x: 2,
            y: 1
        },
        players: [
            {x: 2, y: 2},
            {x: 3, y: 3},
        ]
    },
    points: {
        google: 0,
        players: [0, 0]
    }
};

let _observers = [];

const _notify = () => {
    _observers.forEach(observer => {
        try {
            observer();
        } catch (e) {
            throw new Error(e);
        }
    });
};

const _generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const _jumpGoogle = () => {
    let isValidCoords = false;

    while (!isValidCoords) {
        let newGoogleX = _generateNumber(0, _state.settings.gridSize.columns - 1);
        let newGoogleY = _generateNumber(0, _state.settings.gridSize.rows - 1);

        if (
            (newGoogleX === _state.positions.google.x && newGoogleY === _state.positions.google.y) ||
            (newGoogleX === _state.positions.players[0].x && newGoogleY === _state.positions.players[0].y) ||
            (newGoogleX === _state.positions.players[1].x && newGoogleY === _state.positions.players[1].y)
        ) {
            isValidCoords = false;
        } else {
            isValidCoords = true;
            
            _state.positions.google.x = newGoogleX;
            _state.positions.google.y = newGoogleY;
        }
    }

};

const _getPlayerIndex = (number) => {
    const playerIndex = number - 1;

    if (playerIndex < 0 || playerIndex > _state.points.players.length - 1) {
        throw new Error('incorrect player number')
    }

    return playerIndex;
}

export const getGooglePoints = async () => _state.points.google;

/**
 * 
 * @param {number} playerNumber - one-based index of player 
 * @returns {number} points
 */
export const getPlayerPoints = async (playerNumber) => {
    const playerIndex = _getPlayerIndex(playerNumber);

    return _state.points.players[playerIndex];
};

export const getGridSize = async () => {
    return {..._state.settings.gridSize};
};

export const getGooglePosition = async () => {
    return {..._state.positions.google}
};

export const getPlayerPosition = async (playerNumber) => {
    const playerIndex = _getPlayerIndex(playerNumber);

    return {..._state.positions.players[playerIndex]}
};

export const getGameStatus = async () => _state.gameStatus; 

export const start = () => {
    if (_state.gameStatus !== GAME_STATUSES.SETTINGS) {
        throw new Error('Incorrect game status for start function')
    }

    _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
    _state.positions.players[0] = {x: 0, y: 0};
    _state.positions.players[1] = {
        x: _state.settings.gridSize.columns - 1, 
        y: _state.settings.gridSize.rows - 1
    };
    _state.points = {
        google: 0,
        players: [0, 0]
    };
    
    _jumpGoogle();

    const inervalGoogleTimer = setInterval(() => {
        _jumpGoogle();
    
        _state.points.google++
    
        if (_state.points.google === _state.settings.pointsToLose) {
            clearInterval(inervalGoogleTimer);
            _state.gameStatus = GAME_STATUSES.LOSE;
        }
    
        _notify();
    }, _state.googleJumpInterval);

    _notify();
};

export const playAgain = async () => {
    _state.gameStatus = GAME_STATUSES.SETTINGS;
    
    _notify();
};

export const subscribe = (observer) => {
    _observers.push(observer);
};

export const unsubscribe = (observer) => {
    const deletedIndex = _observers.indexOf(observer);
    _observers.splice(deletedIndex, 1);
};
