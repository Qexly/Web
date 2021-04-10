import { authApiDal, securityAPI } from './../API/api.js';
import { stopSubmit } from 'redux-form';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null,
    captchaUrl: null, //Если null - то капча не нужна
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
            }
        case 'GET_CAPTCHA_URL_SUCCES': 
            return {
                ...state,
                captchaUrl: action.url,
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

const setCaptchaUrl = (url) => ({type: 'GET_CAPTCHA_URL_SUCCES', url}); 

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

export const login = (email, password, remeberMe, captcha) => {
    return (dispatch) => {
        authApiDal.login(email, password, remeberMe, captcha).then(
            (responce) => {
                if (responce.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    if (responce.data.resultCode === 10) {
                        dispatch(getCaptchaUrl());
                    }
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

export const getCaptchaUrl = () => {
    return (dispatch) => {
        securityAPI.getCaptchaUrl().then(
            (responce) => dispatch(setCaptchaUrl(responce.data.url))
        )
    }   
}



export default authReducer;