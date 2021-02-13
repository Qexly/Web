import React, {useContext, useReducer, useState} from 'react';

const AlertContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
} 

const reducer = (state, action) => {
    switch (action.type) {
        case 'show' : return {
            ...state,
            visible: true,
        }
        case 'hide' : return {
            ...state,
            visible: false,
        }
        default: return state
    }
}

export const AlertProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, {
        visible: false,
    })

    const show = () => dispatch({type: 'show'})
    const hide = () => dispatch({type: 'hide'})

    return (
        <AlertContext.Provider value={{
            state: state.visible, hide, show,
        }}>
                {props.children}
        </AlertContext.Provider>
    )
}

export default AlertProvider;