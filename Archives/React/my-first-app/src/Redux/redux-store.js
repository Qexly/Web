import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import usersReducer from './usersReducer.js';
import authReducer from "./auth-reducer.js";

let reducers = combineReducers({ 
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;