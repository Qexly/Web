import { getGridSize, subscribe, unsubscribe } from './../../../Core/state-manager.js';
import { CellComponent } from './Cell/Cell.component.js';

export const GridComponent = () => {
    console.log('Grid created');

    const div = document.createElement('div');

    render(div);

    const observer = () => render(div);

    subscribe(observer);

    return {element: div, cleanup: () => unsubscribe(observer)};
};

const render = async (element) => {
    console.log('Grid rendered');
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
        }
    }

    element.append(table);
};
