import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer';

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
            newMessageBody: '',
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

    //state changing:
    dispatch(action) {

        /*this._state.profilePage = */ profileReducer(this._state.profilePage, action);
        /*this._state.dialogsPage = */ dialogsReducer(this._state.dialogsPage, action);
        this._callSubcriber();
    }
};

export default store;