import {rerendedEntiteTree} from './../render.js';


let state = {

    profilePage: {

        postData: [
            {id: 1, message: 'Hi, how are u?', likesCount: 2},
            {id: 2, message: 'Hi, it\'s my first post', likesCount: 3},  
        ],

        newPostText: 'text of new post',
    },

    dialogsPage: {

        dialogsData: [
            {id: 1, name: 'Dimitry'},
            {id: 2, name: 'Andrew'}, 
            {id: 3, name: 'Maxim'}, 
            {id: 4, name: 'Peter'}, 
            {id: 5, name: 'Vitalya'}, 
            {id: 6, name: 'Vladislav'}
        ],
        messagesData: [
            {id: 1, message: 'Hi, how are u?'},
            {id: 2, message: 'Wazzup! All ok!'}, 
            {id: 3, message: 'Nice!'}, 
        ],
    },

};

function addPost() {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.newPostText = '';
    state.profilePage.postData.push(newPost);
    rerendedEntiteTree(state);
}

function changeNewPostText(newText) {
    state.profilePage.newPostText = newText;
    rerendedEntiteTree(state);
}

export {addPost};
export {changeNewPostText}
export default state;