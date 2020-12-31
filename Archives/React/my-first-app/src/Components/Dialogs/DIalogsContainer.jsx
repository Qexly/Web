import Dialogs from './Dialogs.jsx';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../Redux/dialogsReducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => { 
    return { 
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => { 
    return { 
        onChange: (text) => {
            dispatch(updateNewMessageBodyCreator(text));
        },
        onSubmit: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

