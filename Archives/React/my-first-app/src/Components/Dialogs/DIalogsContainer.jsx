import Dialogs from './Dialogs.jsx'
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../Redux/dialogsReducer'

export default function DialogsContainer(props) {

    function onChangeMessageText(text) {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }

    function onSubmitMessage() {
        props.store.dispatch(sendMessageCreator());
    }

    return(
        <Dialogs state={
            props.store.getState()} 
            onChange={onChangeMessageText} 
            onSubmit={onSubmitMessage} 
        />
    )
}