import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post.jsx';

function MyPosts (){
    return (

        <div>

          My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.MyPosts}>
                <Post message='Hi, how are u?' likesCount='2' />
                <Post message="Hi, it's my first post" likesCount='3'  />
            </div>

        </div>
    );
}

export default MyPosts