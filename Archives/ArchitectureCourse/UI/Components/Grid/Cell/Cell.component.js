import { getGooglePosition, getPlayerPosition, subscribe, unsubscribe } from './../../../../Core/state-manager.js';
import { GoogleComponent } from '../../Common/Google/Google.component.js';
import { PlayerComponent } from '../../Common/Player/Player.component.js';
import { EVENTS } from '../../../../Core/constants.js';

export const CellComponent = (x, y) => {
    const td = document.createElement('td');

    render(td, x, y);

    const observer = (e) => {
        if (e.name !== EVENTS.GOOGLE_JUMPED &&
            e.name !== EVENTS.PLAYER1_MOVED &&
            e.name !== EVENTS.PLAYER2_MOVED
        ) {
            return;
        }

        const {oldPosition, newPosition} = e.payload;
        
        if (
            oldPosition.x === x && oldPosition.y === y ||
            newPosition.x === x && newPosition.y === y
        ) {
            render(td, x, y);
        }
    };

    subscribe(observer);

    return {element: td, cleanup: () => {
        unsubscribe(observer);
    }};
};

const render = async (element, x, y) => {
    element.innerHTML = '';
    const googlePos = await getGooglePosition();
    const [player1Coords, player2Coords] = await Promise.all([getPlayerPosition(1), getPlayerPosition(2)]);

    if (googlePos.x === x && googlePos.y === y) {
        const GoogleRenderResult = GoogleComponent();

        element.append(GoogleRenderResult.element)
    }

    let PlayerRenderResult

    if (player1Coords.x === x && player1Coords.y === y) {
        PlayerRenderResult = PlayerComponent(1);

        element.append(PlayerRenderResult.element)
    }

    if (player2Coords.x === x && player2Coords.y === y) {
        PlayerRenderResult = PlayerComponent(2);

        element.append(PlayerRenderResult.element)
    }
};
