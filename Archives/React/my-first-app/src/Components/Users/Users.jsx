import Axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import userImg from './../Profile/MyPosts/Post/imgs/ava.png'
import s from './Users.module.css';

function Users(props) {
    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(1 + i);
    }

    return (
        <div>
            {
                pages.map((item) => {
                    if (item % 40 == 0) {
                        return <span key={item}
                            className={props.currentPage == item ? s.selectedPage : null}
                            onClick={props.onPageChangeHandler}>{item + ' '}<br /></span>
                    } else {
                        return <span key={item}
                            className={props.currentPage == item ? s.selectedPage : null}
                            onClick={props.onPageChangeHandler}>{item + ' '}</span>
                    }

                })
            }

            {
                props.users.map((item) => {
                    return (
                        <div key={item.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + item.id}> 
                                        <img src={item.photos.small ? item.photos.small : userImg} className={s.photo} />
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        item.followed ? <button disabled={props.isFollowinProg.includes(item.id)} onClick={() => {
                                            props.followTogglerThunkCreator(item.id, false)
                                        }}>Unfollow</button> :
                                            <button disabled={props.isFollowinProg.includes(item.id)} onClick={() => {
                                                props.followTogglerThunkCreator(item.id, true)
                                            }}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        {item.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {'item.location.country'}
                                    </div>
                                    <div>
                                        {'item.location.city'}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;