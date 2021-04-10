
let initialState = {
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
}

export function dialogsReducer(state = initialState, action) {

    if (action.type == 'SEND-MEASSAGE') {
        return {
            ...state,
            messagesData: [...state.messagesData, {id: 0, message: action.message}],
            newMessageBody: ''
        }
    };

    return state;
}

export default dialogsReducer;

export function sendMessageCreator(message) {
    return {
        type: 'SEND-MEASSAGE',
        message,
    }
}
