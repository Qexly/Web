import {subscribe} from '../../../Core/state-manager.js';
import {EVENTS} from '../../../Core/constants.js';

export const AudioComponent = () => {
    const catchAudio = new Audio('Assets/sounds/catch.wav');

    const missAudio = new Audio('Assets/sounds/miss.mp3');

    const observer = ((e) => {
        if (e.name === EVENTS.GOOGLE_CAUGHT) {
            catchAudio.currentTime = 0;
            catchAudio.play();
        }

        if (e.name === EVENTS.GOOGLE_RUNAWAY) {
            missAudio.play();
        }
    })

    subscribe(observer);
};

const render = async (element) => {
    
};
