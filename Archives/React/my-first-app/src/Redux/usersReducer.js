
let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 100,
    isFetching: true,
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
        default:
            return state;
    }

}


export const onFlipTheFollowToggle = (userId) => ({type: 'TOGGLE_FOLLOW', userId}); //toggleFollowAC
export const onSetUsers = (users) => ({type: 'SET_USERS', users}); //setUsersAC
export const onSetPage = (currentPage) => ({type: 'SET_PAGE', currentPage}); //setPageAC
export const onSetTotalCount = (total) => ({type: 'SET_TOTAL', total}); //setTotalCountAC
export const onToggleFetching = (isFetching) => ({type: 'TOGGLE_FETCHING', isFetching}); //toggleFetchingAC

export default usersReducer;

