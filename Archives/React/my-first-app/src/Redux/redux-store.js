import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import usersReducer from './usersReducer.js';
import authReducer from './auth-reducer.js';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({ 
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;