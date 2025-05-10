import {GAME_STATUSES, EVENTS, MOVING_DIRECTIONS} from './constants.js';

const _state = {
    gameStatus: GAME_STATUSES.SETTINGS,
    googleJumpInterval: 4000,
    settings: {
        gridSize: {
            rows: 4,
            columns: 4
        },
        pointsToLose: 10,
        pointsToWin: 5,
    },
    positions: {
        google: {
            x: 2,
            y: 1
        },
        players: [
            {x: 0, y: 0},
            {x: 3, y: 3},
        ]
    },
    points: {
        google: 0,
        players: [0, 0]
    }
};

let _observers = [];

const _notify = (name, payload = {}) => {
    const event = {
        name,
        payload
    };

    _observers.forEach(observer => {
        try {
            observer(event);
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

const _checkValidRange = ({x, y}) => {
    const {rows, columns} = _state.settings.gridSize;

    if (x >= columns || x < 0) {
        return false;
    }

    if (y >= rows || y < 0) {
        return false;
    }

    return true;
};

const _checkOccupied = ({x, y}) => {
    const [{x: x1, y: y1}, {x: x2, y: y2}] = _state.positions.players;

    if (x === x1 && y === y1) {
        return true;
    }

    if (x === x2 && y === y2) {
        return true;
    }

    return false;
};

const _isGooglePos = ({x, y}) => {
    const {x: xG, y: yG} = _state.positions.google;

    if (x === xG && y === yG) {
        return true;
    };

    return false;
};

const _catchGoogle = (playerNumber) => {
    const playerIndex = _getPlayerIndex(playerNumber);

    _state.points.players[playerIndex]++;
    _notify(EVENTS.SCORES_CHANGED);
    _notify(EVENTS.GOOGLE_CAUGHT);

    if (_state.points.players[playerIndex] === _state.settings.pointsToWin) {
        _state.gameStatus = GAME_STATUSES.WIN;
        _notify(EVENTS.SCORES_CHANGED);
        clearInterval(inervalGoogleTimer);
    } else {
        const oldPosition = {..._state.positions.google};

        _jumpGoogle();

        const newPosition = {..._state.positions.google};

        _notify(EVENTS.GOOGLE_JUMPED, {
            oldPosition,
            newPosition
        });
    }
};

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

let inervalGoogleTimer;

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

    inervalGoogleTimer = setInterval(() => {
        const oldPosition = {..._state.positions.google};

        _jumpGoogle();

        _notify(EVENTS.GOOGLE_JUMPED, {
            oldPosition,
            newPosition: {..._state.positions.google}
        });
    
        _notify(EVENTS.GOOGLE_RUNAWAY);
        _state.points.google++;
        _notify(EVENTS.SCORES_CHANGED);
    
        if (_state.points.google === _state.settings.pointsToLose) {
            clearInterval(inervalGoogleTimer);
            _state.gameStatus = GAME_STATUSES.LOSE;
            _notify(EVENTS.STATUS_CHANGED);
        }
    }, _state.googleJumpInterval);

    _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
    _notify(EVENTS.STATUS_CHANGED);
};

export const playAgain = async () => {
    _state.gameStatus = GAME_STATUSES.SETTINGS;
    
    _notify(EVENTS.STATUS_CHANGED);
};

export const subscribe = (observer) => {
    _observers.push(observer);
};

export const unsubscribe = (observer) => {
    const deletedIndex = _observers.indexOf(observer);
    _observers.splice(deletedIndex, 1);
};

export const movePlayer = (playerNumber, direction) => {
    if (_state.gameStatus !== GAME_STATUSES.IN_PROGRESS) {
        console.warn('You can move player only in progress');
        return;
    }

    const playerIndex = _getPlayerIndex(playerNumber);

    const oldPosition = {..._state.positions.players[playerIndex]};
    const newPosition = {..._state.positions.players[playerIndex]};
    
    switch (direction) {
        case MOVING_DIRECTIONS.UP:
            newPosition.y -= 1;
            break;
        case MOVING_DIRECTIONS.DOWN:
            newPosition.y += 1;
            break;
        case MOVING_DIRECTIONS.LEFT:
            newPosition.x -= 1;
            break;
        case MOVING_DIRECTIONS.RIGHT:
            newPosition.x += 1
            break;
        default:
            break;
    }

    const isValidRange = _checkValidRange(newPosition);

    if (!isValidRange) {
        console.warn('Dont valid range');
        return;
    }

    const isOccupied = _checkOccupied(newPosition);

    if (isOccupied) {
        console.warn('Occupied position');
        return;
    }

    const isGooglePos = _isGooglePos(newPosition);

    if (isGooglePos) {
        _catchGoogle(playerNumber);
    }

    _state.positions.players[playerIndex] = newPosition;

    _notify(EVENTS[`PLAYER${playerNumber}_MOVED`], {
        oldPosition,
        newPosition
    });
};
