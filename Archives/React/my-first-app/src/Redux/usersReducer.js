import { UsersApiDal } from './../API/api.js';

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 100,
    isFetching: true,
    isFollowinProg: [],
}

function usersReducer(state = initialState, action) {

    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {
                ...state,
                users: state.users.map((item) => {
                    if (action.userId == item.id) {
                        item.followed = !item.followed; //По правилам нужно еще и копию пользователя сделать
                    }
                    return item
                }),
            };
        case ('SET_USERS') :
            return {...state, users: [/*...state.users*/, ...action.users]};
        case ('SET_PAGE') :
            return {...state, currentPage: action.currentPage};
        case ('SET_TOTAL') :
            return {...state, totalUsersCount: action.total};
        case ('TOGGLE_FETCHING') :
            return {...state, isFetching: action.isFetching};
        case ('TOGGLE_FOLLOW_PROGRESS') : 
            return {
                ...state, 
                isFollowinProg: action.isFollowOnProg ? [...state.isFollowinProg, action.userId] :
                    state.isFollowinProg.filter((item) => item != action.userId),
            }
        default:
            return state;
    }
}


export const onFlipTheFollowToggle = (userId) => ({type: 'TOGGLE_FOLLOW', userId}); //toggleFollowAC
export const onSetUsers = (users) => ({type: 'SET_USERS', users}); //setUsersAC
export const onSetPage = (currentPage) => ({type: 'SET_PAGE', currentPage}); //setPageAC
export const onSetTotalCount = (total) => ({type: 'SET_TOTAL', total}); //setTotalCountAC
export const onToggleFetching = (isFetching) => ({type: 'TOGGLE_FETCHING', isFetching}); //toggleFetchingAC
export const onFollowButtonInProg = (isFollowOnProg, userId) => ({type: 'TOGGLE_FOLLOW_PROGRESS', isFollowOnProg, userId});

export const getUsersThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(onToggleFetching(true)); 
        dispatch(onSetPage(currentPage));
        UsersApiDal.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(onSetUsers(data.items));
                dispatch(onSetTotalCount(data.totalCount));
                dispatch(onToggleFetching(false));
            });
    }
}

export const followTogglerThunkCreator = (userId, toFollow) => {
    return (dispatch) => {
        dispatch(onFollowButtonInProg(true, userId));
        if (toFollow) {
            UsersApiDal.follow(userId)
            .then((responce) => {
                if (responce.data.resultCode === 0) dispatch(onFlipTheFollowToggle(userId));
                dispatch(onFollowButtonInProg(false, userId));
            })
        } else {
            UsersApiDal.unfollow(userId)
            .then((responce) => {
                if (responce.data.resultCode === 0) dispatch(onFlipTheFollowToggle(userId));
                dispatch(onFollowButtonInProg(false, userId));
            })
        }
    }
}

export default usersReducer;

