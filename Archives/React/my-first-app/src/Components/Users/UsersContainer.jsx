import React, { Fragment} from 'react';
import {connect} from 'react-redux';
import {followTogglerThunkCreator, onSetPage, getUsersThunkCreator} from '../../Redux/usersReducer.js';
import Users from './Users';
import Preloader from '../common/preloader/Preloader.jsx';
import { withAuthRedirect } from './../../HOCs/withAuthRedirect.jsx';
import { compose } from 'redux'; 

class UsersAPI extends React.Component { //делает запросы

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage);
    }

    onPageChangeHandler = (e) => {
        this.props.onSetPage(+e.currentTarget.innerText); 
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        usersCount: 200,/*state.usersPage.totalUsersCount,*/
        isFetching: state.usersPage.isFetching,
        isFollowinProg: state.usersPage.isFollowinProg,
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