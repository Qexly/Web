import { getGridSize, movePlayer } from './../../../Core/state-manager.js';
import { MOVING_DIRECTIONS } from '../../../Core/constants.js'
import { CellComponent } from './Cell/Cell.component.js';

export const GridComponent = () => {
    const localState = {
        cleanups: []
    }

    const div = document.createElement('div');

    render(div, localState);

    const keyupHandler = (e) => {
        const {code} = e

        switch (code) {
            case 'ArrowUp':
                movePlayer(1, MOVING_DIRECTIONS.UP);
                break;
            case 'ArrowDown':
                movePlayer(1, MOVING_DIRECTIONS.DOWN);
                break;
            case 'ArrowLeft':
                movePlayer(1, MOVING_DIRECTIONS.LEFT);
                break;
            case 'ArrowRight':
                movePlayer(1, MOVING_DIRECTIONS.RIGHT);
                break;
            case 'KeyW':
                movePlayer(2, MOVING_DIRECTIONS.UP);
                break;
            case 'KeyS':
                movePlayer(2, MOVING_DIRECTIONS.DOWN);
                break;
            case 'KeyA':
                movePlayer(2, MOVING_DIRECTIONS.LEFT);
                break;
            case 'KeyD':
                movePlayer(2, MOVING_DIRECTIONS.RIGHT);
                break;
            default:
                break;
        }
    }

    document.addEventListener('keyup', keyupHandler);

    return {element: div, cleanup: () => {
        localState.cleanups.forEach(func => func());

        document.removeEventListener('keyup', keyupHandler);
    }};
};

const render = async (element, localState) => {
    element.classList.add('gridContainer')
    element.innerHTML = '';

    const {rows, columns} = await getGridSize();

    const table = document.createElement('table');

    table.classList.add('grid');

    for (let y = 0; y < rows; y++) {
        const tr = document.createElement('tr');

        table.append(tr)

        for (let x = 0; x < columns; x++) {
            const td = CellComponent(x, y);

            tr.append(td.element);
            localState.cleanups.push(td.cleanup)
        }
    }

    element.append(table);
};
