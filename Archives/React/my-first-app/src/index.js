import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appStore from './Redux/redux-store.js';


function rerendedEntiteTree(store) {
  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerendedEntiteTree(appStore);

appStore.subscribe(rerendedEntiteTree.bind(null, appStore));


























/*
import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
