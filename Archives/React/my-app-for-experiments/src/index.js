import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './Components/Clock/Clock.jsx'; 
import Button from './Components/Button/Button.jsx';
import Greeting from './Components/Greeting/Greeting.jsx';
import LoginControl from './Components/LoginControl/LoginControl.jsx';
import PlainList from './Components/PlainList/PlainList.jsx';
import NameForm from './Components/NameForm/NameForm.jsx';

ReactDOM.render(
  <React.StrictMode>
    <NameForm />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
