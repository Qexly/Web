import {getGooglePoints, getPlayerPoints, subscribe, unsubscribe} from './../../../Core/state-manager.js';

export const ResultComponent = () => {
    const localState = {
        googlePoints: null,
        player1Points: null,
        player2Points: null
    };

    const div = document.createElement('div');
    div.classList.add('result-panel');

    render(div, localState);

    const observer = () => render(div, localState);

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

    element.append(`Player 1: ${player1Points}, Player 2: ${player2Points}, Google: ${googlePoints}`);
};