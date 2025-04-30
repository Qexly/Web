import {AppComponent} from './Components/App.component.js';
import {subscribe, unsubscribe} from '../Core/state-manager.js';

const renderApp = () => {
    const root = document.getElementById('root');

    root.innerHTML = '';

    const appRenderingResult = AppComponent();

    root.append(appRenderingResult.element);
};

renderApp();

//subscribe(renderApp);
//unsubscribe(renderApp);