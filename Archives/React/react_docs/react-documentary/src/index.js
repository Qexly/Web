import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//basic
import Welcome from './Components_basic/Welcome/Welcome.jsx';
import Clock from './Components_basic/Clock/Clock.jsx'; 
import ButtonToggle from './Components_basic/ButtonToggle/ButtonToggle.jsx';
import Greeting from './Components_basic/Greeting/Greeting.jsx';
import LoginControl from './Components_basic/LoginControl/LoginControl.jsx';
import PlainList from './Components_basic/PlainList/PlainList.jsx';
import NameForm from './Components_basic/NameForm/NameForm.jsx';
import FlavorForm from './/Components_basic/FlavorForm/FlavorForm.jsx'
import Reservation from './Components_basic/Reservation/Reservation.jsx'
import CalcTemp from './Components_basic/CalcTemp/CalcTemp.jsx';
import FancyBorder from './Components_basic/ChildrenExperiments/ChildrenExperiments.jsx'
import FilterableProductTable from './Components_basic/FilterableProductTable/FilterableProductTable.jsx';
import {PRODUCTS} from './Components_basic/FilterableProductTable/FilterableProductTable.jsx';
//advanced
import RefFocus from './Components_advanced/refFocus/RefFocus.jsx';
import RefChild from './Components_advanced/refChild/refChild.jsx';
import OuterClickExample from './Components_advanced/OuterClickExample/OuterClickExample.jsx';
//HOOKS
import Expample from './HOOKS/useState.jsx';
import EffectExpample from './HOOKS/useEffect.jsx';


ReactDOM.render(
  <React.StrictMode>
   <EffectExpample />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
