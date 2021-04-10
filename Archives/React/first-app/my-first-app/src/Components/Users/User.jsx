import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
import userImg from './../Profile/MyPosts/Post/imgs/ava.png'

const User = (props) => {
    let { isFollowinProg, followTogglerThunkCreator, item } = props;
    return (
        <div>
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

}

export default User;