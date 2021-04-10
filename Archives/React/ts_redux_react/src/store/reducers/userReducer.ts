import { IUserState, UserAction, UserActionTypes } from "../../types/user";

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                ...state,
                loading: true,
                error: null,
                users: []
            }
        case UserActionTypes.FETCH_USERS_SECCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                ...state,
                loading: true,
                error: action.payload,
                users: []
            }
        default:
            return state;
    }
}

//13:30