import {GAME_STATUSES, EVENTS, MOVING_DIRECTIONS} from './constants.js';

const eventSource = new EventSource('http://localhost:3000/events');

eventSource.addEventListener('message', (e) => {
    const event = JSON.parse(e.data);

    _notify(event.name, event.payload);
});

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

export const subscribe = (observer) => {
    _observers.push(observer);
};

export const unsubscribe = (observer) => {
    const deletedIndex = _observers.indexOf(observer);
    _observers.splice(deletedIndex, 1);
};

export const getGooglePoints = async () => {
    const responce = await fetch('http://localhost:3000/getGooglePoints');
    const responcePayload = await responce.json();
    return responcePayload.data;

};

/**
 * 
 * @param {number} playerNumber - one-based index of player 
 * @returns {number} points
 */
export const getPlayerPoints = async (playerNumber) => {
    const responce = await fetch(`http://localhost:3000/getPlayerPoints?playerNumber=${playerNumber}`);
    const responcePayload = await responce.json();
    return responcePayload.data;
};

export const getGridSize = async () => {
    const responce = await fetch('http://localhost:3000/getGridSize');
    const responcePayload = await responce.json();
    return responcePayload.data;
};

export const getGooglePosition = async () => {
    const responce = await fetch('http://localhost:3000/getGooglePosition');
    const responcePayload = await responce.json();
    return responcePayload.data;
};

export const getPlayerPosition = async (playerNumber) => {
    const responce = await fetch(`http://localhost:3000/getPlayerPosition?playerNumber=${playerNumber}`);
    const responcePayload = await responce.json();
    return responcePayload.data

};

export const getGameStatus = async () => {
    const responce = await fetch('http://localhost:3000/getGameStatus');
    const responcePayload = await responce.json();
    return responcePayload.data;
}

export const start = () => {
    fetch('http://localhost:3000/start');
};

export const playAgain = async () => {
    fetch('http://localhost:3000/playAgain');
}

export const movePlayer = (playerNumber, direction) => {
    fetch(`http://localhost:3000/movePlayer?playerNumber=${playerNumber}&direction=${direction}`);
};
