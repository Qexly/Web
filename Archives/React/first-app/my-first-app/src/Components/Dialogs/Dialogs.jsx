import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from "./../common/FormsControls/FormsControls.jsx";
import {required,  maxLengthCreator} from './../../Utils/Validators.js';

let maxLength10 = maxLengthCreator(10);

function Dialogs(props) {

    let dialogsElements = props.dialogs.map((item, index, array) => {
        return <DialogItem name={item.name} id={item.id} key={item.id} />
    });

    let messagesElements = props.messages.map((item) => {
        return <Message text={item.message} id={item.id} key={item.id} />
    });

    function onSubmitHandler(formData) {
        props.onSubmit(formData.newMessageBody);
    }

    return (
        <div className={s.dialogsContainer}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={onSubmitHandler} />
            </div>

        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,  maxLength10]} name="newMessageBody" placeholder="Enter a message"/>
            </div>
                <div>
                    <button>Send</button>
                </div>
        </form>
    )
}

let AddMessageReduxForm = reduxForm({
    form: 'dialogsAddMessageForm',
})(AddMessageForm);

export default Dialogs;