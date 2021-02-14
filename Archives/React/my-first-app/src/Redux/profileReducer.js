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

    if (action.type == 'SAVE_PHOTO_SUCCES') {
        return {
            ...state,
            profile: {...state.profile, photos: action.photos}
        }
    };

    return state;
}

export default profileReducer;

export const addPostActionCreator = (postText) => ({type: 'ADD-POST', postText});

export const onSetUserProfile = (profile) => ({type:'SET_USER_PROFILE', profile});

const setUserStatus = (status) => ({type: 'SET-USER-STATUS', status});

const savePhotoSucces = (photos) => ({type: 'SAVE_PHOTO_SUCCES', photos});
   
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

export const savePhoto = (file) => {
    return (dispatch) => {
        profileApiDal.savePhoto(file).then(
            (responce) => {
                if (responce.data.resultCode === 0) dispatch(responce.data.data.photos);
            }
        )
    }
}

//dispatch вызовет каждый редьюсер от (стейта, экшен)