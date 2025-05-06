import {getGooglePoints, getPlayerPoints, subscribe, unsubscribe} from './../../../Core/state-manager.js';
import {EVENTS} from '../../../Core/constants.js';

export const ResultComponent = () => {
    const localState = {
        googlePoints: null,
        player1Points: null,
        player2Points: null
    };

    const div = document.createElement('div');
    div.classList.add('result-panel');

    render(div, localState);
    // если не проверить на имя события, то будет гонка
    const observer = (e) => e.name === EVENTS.SCORES_CHANGED && render(div, localState);

    subscribe(observer);

    return {element: div, cleanup: () => unsubscribe(observer)};
};

const render = async (element, localState) => {
    element.innerHTML = '';

    const [googlePoints, player1Points, player2Points] = await Promise.all([
        getGooglePoints(),
        getPlayerPoints(1),
        getPlayerPoints(2)
    ]);

    if (
        localState.googlePoints !== googlePoints ||
        localState.player1Points !== player1Points ||
        localState.player2Points !== player2Points
    ) {
        Object.assign(localState, {
            googlePoints,
            player1Points,
            player2Points
        });
    } else {
        return;
    }

    element.append(`Player 1: ${localState.player1Points}, Player 2: ${localState.player2Points}, Google: ${localState.googlePoints}`);
};