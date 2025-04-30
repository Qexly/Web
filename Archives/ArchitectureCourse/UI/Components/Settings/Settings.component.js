export const SettingsComponent = () => {
    const div = document.createElement('div');

    render(div);

    return {element: div};
};

const render = async (element) => {
    element.append('Settings');
};