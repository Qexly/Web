import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../Redux/dialogsReducer'

function Dialogs(props) {

    let dialogsElements = props.dialogs.map((item, index, array) => {
        return <DialogItem name={item.name} id={item.id} />
    });

    let messagesElements = props.messages.map((item) => {
        return <Message text={item.message} id={item.id} />
    });

    let newMessageBody = props.state.dialogsPage.newMessageBody;

    function onNewMessageValueChange(e) {
        let text = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(text));
    }

    function onSendMessageButtonClick() {
        props.dispatch(sendMessageCreator());
    }

    return (
        <div className={s.dialogsContainer}>

            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody} placeholder="Enter a message" onChange={onNewMessageValueChange}></textarea></div>
                <div><button onClick={onSendMessageButtonClick}>Send</button></div>
                
            </div>

        </div>
    );
}

export default Dialogs;