import React from 'react';
import {useAlert} from './AlertContext';

const Alert = (props) => {

    const {state, hide} = useAlert(); // return useContext(AlertContext);

    return (
        state ? (
            <div style={{border: '1px solid red', width: '300px', backgroundColor: 'red', color: 'white'}}
                onClick={() => hide()}>
                Warning
            </div>
        ) : null
        
    )
}

export default Alert;