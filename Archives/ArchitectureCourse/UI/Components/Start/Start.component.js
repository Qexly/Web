import {start} from './../../../Core/state-manager.js';

export const StartComponent = () => {
    const div = document.createElement('div');

    render(div);

    return {element: div};
};

const render = async (element) => {
    const btn = document.createElement('button');
    btn.textContent = 'Start the game';

    btn.addEventListener('click', () => {
        start();
    })

    element.append(btn);
};
