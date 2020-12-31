import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appStore from './Redux/redux-store.js';
import {Provider} from 'react-redux';


//в провайдере пропс, в котором передаем стор, должен называться именно store!
ReactDOM.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);































/*
import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
