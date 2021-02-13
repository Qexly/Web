import React from 'react';
import Paginator from './../common/Paginator/Paginator.jsx';
import User from './User.jsx';

function Users(props) {

    let {usersCount, pageSize, currentPage, onPageChangeHandler, isFollowinProg, followTogglerThunkCreator} = props;

    return (
        <div>
            
            <Paginator {...{usersCount, pageSize, currentPage, onPageChangeHandler}} portionsSize={10} />
            {
                props.users.map((item) => <User {...{isFollowinProg, followTogglerThunkCreator, item}} />)
            }
        </div>
    )
}

export default Users;