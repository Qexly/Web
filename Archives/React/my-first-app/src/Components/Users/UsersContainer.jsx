import React, { Fragment} from 'react';
import {connect} from 'react-redux';
import {followTogglerThunkCreator, onSetPage, getUsersThunkCreator} from '../../Redux/usersReducer.js';
import Users from './Users';
import Preloader from '../common/preloader/Preloader.jsx';
import { withAuthRedirect } from './../../HOCs/withAuthRedirect.jsx';
import { compose } from 'redux'; 
import { superGetUsersSelector, getPageSize, getCurrentPage, getUsersCount, getIsFetching, getIsFollowinProg } from './../../Redux/users-selectors.js';

class UsersAPI extends React.Component { //делает запросы

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage);
    }

    onPageChangeHandler = (e) => { 
        this.props.getUsersThunkCreator(this.props.pageSize, +e.currentTarget.innerText) 
    }

    render() {
       return (
           <Fragment>
               {this.props.isFetching ? <Preloader /> : null}
                <Users 
                    usersCount={this.props.usersCount} 
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    isFollowinProg={this.props.isFollowinProg}
                    onPageChangeHandler={this.onPageChangeHandler} 
                    followTogglerThunkCreator={this.props.followTogglerThunkCreator}
                />
           </Fragment>
            
       )
       
    }
}

let mapStateToProps = (state) => {
    return {
        users: superGetUsersSelector(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        usersCount: getUsersCount(state),
        isFetching: getIsFetching(state),
        isFollowinProg: getIsFollowinProg(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        followTogglerThunkCreator, 
        onSetPage, 
        getUsersThunkCreator,
    })  
)(UsersAPI)
/*
const UsersContainer = connect(mapStateToProps, {
    followTogglerThunkCreator, 
    onSetPage, 
    getUsersThunkCreator,
})(UsersAPI);

export default UsersContainer;
*/