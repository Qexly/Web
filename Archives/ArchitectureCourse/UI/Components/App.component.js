import {SettingsComponent} from './Settings/Settings.component.js';
import {ResultComponent} from './ResultPanel/Result.component.js';
import {GridComponent} from './Grid/Grid.component.js';
import {LoseComponent} from './Lose/Lose.component.js';
import {StartComponent} from './Start/Start.component.js';
import {getGameStatus, subscribe} from './../../Core/state-manager.js';
import {GAME_STATUSES} from './../../Core/constants.js';


export const AppComponent = () => {
    const localState = {
        prevGameStatus: null,
        cleanups: []
    };

    const div = document.createElement('div');

    render(div, localState);

    subscribe(() => render(div, localState));

    return {element: div};
};

const render = async (element, localState) => {
    const gameStatus = await getGameStatus();

    if (gameStatus === localState.prevGameStatus) {
        return;
    } else {
        localState.prevGameStatus = gameStatus;
    }

    element.innerHTML = '';

    localState.cleanups.forEach(func => {
        func();
    });
    localState.cleanups = [];


    switch (gameStatus) {
        case GAME_STATUSES.SETTINGS: {
            const SettingsRenderingResult = SettingsComponent();
            const StartRendering = StartComponent()
            element.append(SettingsRenderingResult.element, StartRendering.element);
            break;
        }
        case GAME_STATUSES.IN_PROGRESS: {
            const SettingsRenderingResult = SettingsComponent();
            const ResultRenderingResult = ResultComponent();
            const GridRenderingResult = GridComponent();

            localState.cleanups.push(GridRenderingResult.cleanup, ResultRenderingResult.cleanup);

            element.append(SettingsRenderingResult.element, ResultRenderingResult.element, GridRenderingResult.element);
            break;
        }
        case GAME_STATUSES.LOSE: {
            const LoseRenderingResult = LoseComponent();
            element.append(LoseRenderingResult.element);
            break;
        }
        default:
            break;
    }

    
};