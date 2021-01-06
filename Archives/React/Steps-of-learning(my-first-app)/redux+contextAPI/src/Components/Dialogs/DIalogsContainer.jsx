import Dialogs from './Dialogs.jsx';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../Redux/dialogsReducer';
import StoreContext from './../../StoreContext.js';

export default function DialogsContainer(props) {

    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    function onChangeMessageText(text) {
                        store.dispatch(updateNewMessageBodyCreator(text));
                    }

                    function onSubmitMessage() {
                        store.dispatch(sendMessageCreator());
                    }

                    return(
                        <Dialogs 
                            state={state} 
                            onChange={onChangeMessageText} 
                            onSubmit={onSubmitMessage} 
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}