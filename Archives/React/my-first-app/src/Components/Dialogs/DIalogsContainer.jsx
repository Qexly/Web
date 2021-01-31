import Dialogs from './Dialogs.jsx';
import { sendMessageCreator } from './../../Redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../HOCs/withAuthRedirect.jsx';
import { compose } from 'redux';

let mapStateToProps = (state) => { 
    return { 
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => { 
    return { 
        onSubmit: (message) => {
            dispatch(sendMessageCreator(message));
        }
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;

