import {AppComponent} from './Components/App.component.js';

const renderApp = () => {
    const root = document.getElementById('root');

    root.innerHTML = '';

    const appRenderingResult = AppComponent();

    root.append(appRenderingResult.element);
};

renderApp();
