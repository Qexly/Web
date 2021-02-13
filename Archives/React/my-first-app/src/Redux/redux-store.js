import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import usersReducer from './usersReducer.js';
import authReducer from './auth-reducer.js';
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({ 
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;