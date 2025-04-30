export const GoogleComponent = () => {
    const img = document.createElement('img');

    render(img);

    return {element: img};
};

const render = async (element) => { 
    element.src = './Assets/images/google.png';
};
