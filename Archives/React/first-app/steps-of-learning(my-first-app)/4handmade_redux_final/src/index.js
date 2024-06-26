import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appStore from './Redux/store.js';


function rerendedEntiteTree(store) {
    ReactDOM.render(
      <React.StrictMode>
        <App 
        state={store.getState} 
        dispatch={store.dispatch.bind(store)}
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerendedEntiteTree(appStore);

appStore.subscribe(rerendedEntiteTree);


























/*
import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
