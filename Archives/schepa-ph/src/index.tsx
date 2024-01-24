import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import EnvProvider from 'Componenets/EnviromentProvider';
import 'Assets/fonts/Finladica/stylesheet.css';

const ROOT_BLOCK = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(
  ROOT_BLOCK
);

root.render(
  <React.StrictMode>
    <EnvProvider rootBlock={ROOT_BLOCK}>
      <App />
    </EnvProvider>
  </React.StrictMode>
);
