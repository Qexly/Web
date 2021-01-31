import { profileApiDal } from './../API/api.js';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are u?', likesCount: 2 },
        { id: 2, message: 'Hi, it\'s my first post', likesCount: 3 },
    ],
    profile: null,
    status: '', 
};

function profileReducer(state = initialState, action) {

    if (action.type == 'ADD-POST') { 
        return {
            ...state,
            postData: [...state.postData, {id: 3, message: action.postText, likesCount: 0}],
        }
    };

    if (action.type == 'SET_USER_PROFILE') {
        return {
            ...state,
            profile: action.profile
        }
    };

    if (action.type == 'SET-USER-STATUS') {
        return {
            ...state,
            status: action.status
        }
    };

    return state;
}

export default profileReducer;

export function addPostActionCreator(postText) {
    return {
        type: 'ADD-POST',
        postText,
    }
}


export const onSetUserProfile = (profile) => ({type:'SET_USER_PROFILE', profile});

const setUserStatus = (status) => {
    return {
        type: 'SET-USER-STATUS',
        status,
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApiDal.getProfile(userId)
            .then(responce => {
                dispatch(onSetUserProfile(responce.data));
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileApiDal.getStatus(userId).then(
            (responce) => {
                dispatch(setUserStatus(responce.data));
            }
        )
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileApiDal.updateStatus(status).then(
            (responce) => {
                if (responce.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            } 
        ) 
    }
}

//dispatch вызовет каждый редьюсер от (стейта, экшен)