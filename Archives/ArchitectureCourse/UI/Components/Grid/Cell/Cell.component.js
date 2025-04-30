import { getGooglePosition, getPlayerPosition } from './../../../../Core/state-manager.js';
import { GoogleComponent } from '../../Common/Google/Google.component.js';
import { PlayerComponent } from '../../Common/Player/Player.component.js';

export const CellComponent = (x, y) => {
    const td = document.createElement('td');

    render(td, x, y);

    return {element: td};
};

const render = async (element, x, y) => {
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
