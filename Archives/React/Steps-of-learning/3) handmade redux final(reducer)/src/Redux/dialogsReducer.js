
export function dialogsReducer(state, action) {
    if (action.type == 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageBody = action.body;
    };
    if (action.type == 'SEND-MEASSAGE') {
        state.messagesData.push({
            id: 0, 
            message: state.newMessageBody,
        });
        state.newMessageBody = '';
    };

    return state;
}

export default dialogsReducer;

export function sendMessageCreator() {
    return {
        type: 'SEND-MEASSAGE',
    }
}

export function updateNewMessageBodyCreator(text) {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: text,
    }
}