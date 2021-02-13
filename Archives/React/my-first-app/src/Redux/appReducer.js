import { getAuthUserData } from './auth-reducer';

let initialState = {
    initialized: false, 
}

 let appReducer = (state = initialState, action) => {
    if (action.type === 'INITIAL_SUCCES') {
        return {
        ...state,
        initialized: true,
        }
    }

    return state;
}

export const initialSuccesAC = () => ({type: 'INITIAL_SUCCES'});

export const initialAppTC = () => {
    return (dispatch) => {
      dispatch(getAuthUserData()).then(
            (responce) => {
                dispatch(initialSuccesAC())
            }
        )
       
    }
}

export default appReducer;