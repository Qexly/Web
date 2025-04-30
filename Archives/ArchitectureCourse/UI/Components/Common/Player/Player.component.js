export const PlayerComponent = (playerNumber) => {
    const img = document.createElement('img');

    render(img, playerNumber);

    return {element: img};
};

const render = async (element, number) => { 
    element.src = `./Assets/images/player${number}.png`;
};