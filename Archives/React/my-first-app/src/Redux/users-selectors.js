import { createSelector } from 'reselect';

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const superGetUsersSelector = createSelector(getUsers, (users) =>{
    return users.filter(item => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getIsFollowinProg = (state) => {
    return state.usersPage.isFollowinProg;
}



