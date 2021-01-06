import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Welcome from './Components_basic/Welcome/Welcome.jsx';
import Clock from './Components_basic/Clock/Clock.jsx'; 
import Button from './Components_basic/Button/Button.jsx';
import Greeting from './Components_basic/Greeting/Greeting.jsx';
import LoginControl from './Components_basic/LoginControl/LoginControl.jsx';
import PlainList from './Components_basic/PlainList/PlainList.jsx';
import NameForm from './Components_basic/NameForm/NameForm.jsx';
import CalcTemp from './Components_basic/CalcTemp/CalcTemp.jsx';
import FilterableProductTable from './Components_basic/FilterableProductTable/FilterableProductTable.jsx';
import {PRODUCTS} from './Components_basic/FilterableProductTable/FilterableProductTable.jsx';
import OnClickWindowList from './Components_advanced/onClickWindowList/OnClickWindowList.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name='Илья'/>
    <Welcome name='Мария'/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
