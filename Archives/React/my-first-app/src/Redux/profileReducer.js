
let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are u?', likesCount: 2 },
        { id: 2, message: 'Hi, it\'s my first post', likesCount: 3 },
    ],
    newPostText: '',
    profile: null, 
};

function profileReducer(state = initialState, action) {

    if (action.type == 'ADD-POST') { 
        return {
            ...state,
            postData: [...state.postData, {id: 3, message: state.newPostText, likesCount: 0}],
            newPostText: '',
        }
    };

    if (action.type == 'UPDATE-NEW-POST-TEXT') {
        return {
            ...state,
            newPostText: action.newText,
        }
    };

    if (action.type == 'SET_USER_PROFILE') {
        return {
            ...state,
            profile: action.profile
        }
    };

    return state;

}

export default profileReducer;

export function addPostActionCreator() {
    return {
        type: 'ADD-POST',
    }
}

export function updateNewPostTextAC(text) {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text,
    }
}

export const onSetUserProfile = (profile) => ({type:'SET_USER_PROFILE', profile})

//dispatch вызовет каждый редьюсер от (стейта, экшен)