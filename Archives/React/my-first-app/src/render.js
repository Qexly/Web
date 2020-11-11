import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './Redux/state.js';
import {changeNewPostText} from './Redux/state.js';

export function rerendedEntiteTree(state) {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


