import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


function Dialogs(props) {

    let dialogsElements = props.state.dialogsPage.dialogsData.map((item, index, array) => {
        return <DialogItem name={item.name} id={item.id} />
    });

    let messagesElements = props.state.dialogsPage.messagesData.map((item) => {
        return <Message text={item.message} id={item.id} />
    });

    let newMessageBody = props.state.dialogsPage.newMessageBody;

    function onNewMessageValueChange(e) {
        let text = e.target.value;
        props.onChange(text);
    }

    function onSendMessageButtonClick() {
        props.onSubmit();
    }

    return (
        <div className={s.dialogsContainer}>

            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody} placeholder="Enter a message" 
                onChange={onNewMessageValueChange}></textarea></div>
                <div><button onClick={onSendMessageButtonClick}>Send</button></div>
                
            </div>

        </div>
    );
}

export default Dialogs;