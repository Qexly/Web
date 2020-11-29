import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer.js'
import dialogsReducer from './dialogsReducer.js'

let reducers = combineReducers({ 
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;