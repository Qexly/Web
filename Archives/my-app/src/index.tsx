import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EnvProvider from 'Components/EnviromentProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <EnvProvider>
      <App />
    </EnvProvider>
  </React.StrictMode>
);
