import { authApiDal } from './../API/api.js';
import { stopSubmit } from 'redux-form';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const onSetAuthUserData = ({id, email, login, isAuth}) => { 
    return {
        type: 'SET_USER_DATA',
        data: {
            id, 
            email, 
            login,
            isAuth,
        },
    }
}
//thunk creators
export const getAuthUserData = () => {
    return (dispatch) => {
        return authApiDal.me().then(
            (responce) => {
                if (responce.data.resultCode === 0) {
                    dispatch(onSetAuthUserData({...responce.data.data, isAuth: true}));
                }
            });
    }
}

export const login = (email, password, remeberMe) => {
    return (dispatch) => {
        authApiDal.login(email, password, remeberMe).then(
            (responce) => {
                if (responce.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let action = stopSubmit('login', {_error: responce.data.messages});
                    dispatch(action);
                }
            }
        )
    }
}

export const logout = () => {
    return (dispatch) => {
        authApiDal.logout().then(
            (responce) => {
                if (responce.data.resultCode === 0) {
                    dispatch(onSetAuthUserData({id: null, email: null, login: null, isAuth: false}));
                }
            }
        )
    }
}

export default authReducer;