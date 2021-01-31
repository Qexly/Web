import {authApiDal} from './../API/api.js';

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
                isAuth: true,
            }
        default:
            return state;
    }
}

export const onSetAuthUserData = ({id, email, login}) => { 
    return {
        type: 'SET_USER_DATA',
        data: {
            id, 
            email, 
            login,
        },
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        authApiDal.me().then(
            (responce) => {
              if (responce.data.resultCode === 0) {
                dispatch(onSetAuthUserData(responce.data.data)); 
              }
            }); 
    }
}

export default authReducer;