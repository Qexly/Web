import {UserActionTypes, UserAction} from './../../types/user';
import {Dispatch} from 'redux';
import axios from 'axios';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type: UserActionTypes.FETCH_USERS_SECCESS, payload: response.data});
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'users fetch error'})
        }
    }
}

