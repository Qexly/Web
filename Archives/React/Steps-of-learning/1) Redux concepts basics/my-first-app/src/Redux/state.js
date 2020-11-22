
let store = {

    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are u?', likesCount: 2 },
                { id: 2, message: 'Hi, it\'s my first post', likesCount: 3 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dimitry' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Maxim' },
                { id: 4, name: 'Peter' },
                { id: 5, name: 'Vitalya' },
                { id: 6, name: 'Vladislav' }
            ],
            messagesData: [
                { id: 1, message: 'Hi, how are u?' },
                { id: 2, message: 'Wazzup! All ok!' },
                { id: 3, message: 'Nice!' },
            ],
        },
    },

    _callSubcriber() {
        console.log('state changed');
    },

    get getState() {
        return this._state;
    }, 


    subscribe(observer) {
        this._callSubcriber = observer.bind(null ,this);
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
    
        this._state.profilePage.newPostText = '';
        this._state.profilePage.postData.push(newPost);
        this._callSubcriber();
    },

    changeNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubcriber();
    }
};

export default store;