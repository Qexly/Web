import React, {useContext, useReducer, useState} from 'react';

const AlertContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext); //Возвращает то, что положили в проп value
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

///////////////////////////////////////////////////////////////////////////////////////////

const somethingContext = useContext();

export const getContext = () => {
    return useContext(AlertContext); //Возвращает то, что положили в проп value
} 

const somethingReducer = (state, action) => {
    if (action.type === 'type') {
        return {
            ...state,
            type = action.type,
        }
    } else {
        return state
    }
}

const SomethingProvider = (props) => {
    let children = {props};

    const [state, dispatch] = useReducer(somethingReducer, {type: null});

    const doDispatch = () => dispatch({type:'action'})

    return (
        <somethingContext.Provider value={state, doDispatch}>
            {children}
        </somethingContext.Provider>
    )
}