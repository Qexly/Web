
function profileReducer(state, action) {
    if (action.type == 'ADD-POST') {  //state будет являться на самом деле лишь веткой profilePage целого стейта, т.к. он целиков в редьюсер не передется
        let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0,
        };
    
        state.newPostText = '';
        state.postData.push(newPost);
    };
    if (action.type == 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
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