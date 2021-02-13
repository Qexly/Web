import React from 'react';
import {useAlert} from './Alert/AlertContext.jsx'

const Main = (props) => {

    const {toggle, show} = useAlert();

    return (
        <div>
            <h1>Привет в примере с Context</h1>
            <button onClick={toggle, show}>Показать alert</button>
        </div>
    )
}

export default Main;