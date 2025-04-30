import {playAgain} from '../../../Core/state-manager.js';

export const LoseComponent = () => {
    const div = document.createElement('div');

    render(div);

    return {element: div};
};

const render = async (element) => {
    const titleElement = document.createElement('h1');
    titleElement.append('YOU LOSE GOOGLE WIN');

    element.append(titleElement);

    const btn = document.createElement('button');
    btn.textContent = 'Try again'

    element.append(btn);

    btn.addEventListener('click', () => {
        playAgain();
    })
};
