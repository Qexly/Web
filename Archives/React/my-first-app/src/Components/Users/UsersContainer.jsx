import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {onFlipTheFollowToggle, onSetUsers, onSetPage, onSetTotalCount, onToggleFetching} from '../../Redux/usersReducer.js';
import Axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader.jsx';
import { UsersApiDal } from "./../../API/api.js";

class UsersAPI extends React.Component { //делает запросы

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.users.length) {
            this.props.onToggleFetching(true);
            UsersApiDal.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
               this.props.onSetUsers(data.items); 
               this.props.onSetTotalCount(data.totalCount);
               this.props.onToggleFetching(false);
            }); 
        }    
    }

    onPageChangeHandler = (e) => {
        this.props.onToggleFetching(true);
        this.props.onSetPage(+e.currentTarget.innerText);
        UsersApiDal.getUsers(this.props.pageSize, +e.currentTarget.innerText)
            .then(data => {
               this.props.onSetUsers(data.items); //делать запрос ответственность этой компоненты
               this.props.onToggleFetching(false);
            }); 
    }

    render() {
       return (
           <Fragment>
               {this.props.isFetching ? <Preloader /> : null}
                <Users 
                    usersCount={this.props.usersCount} 
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChangeHandler={this.onPageChangeHandler} 
                    onFlipTheFollowToggle={this.props.onFlipTheFollowToggle}
                    users={this.props.users}
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
    }
}

const UsersContainer = connect(mapStateToProps, {onFlipTheFollowToggle, onSetUsers, onSetPage, onSetTotalCount, onToggleFetching})(UsersAPI);

export default UsersContainer;