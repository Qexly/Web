import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

function Dialogs(props) {

    let dialogsElements = props.dialogs.map((item, index, array) => {
        return <DialogItem name={item.name} id={item.id} />
    });

    let messagesElements = props.messages.map((item) => {
        return <Message text={item.message} id={item.id} />
    });

    return (
        <div className={s.dialogsContainer}>

            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            
            <div className={s.messages}>

                {messagesElements}
                
            </div>

        </div>
    );
}

export default Dialogs;