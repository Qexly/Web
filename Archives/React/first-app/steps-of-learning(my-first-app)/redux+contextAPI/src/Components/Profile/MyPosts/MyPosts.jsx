import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post.jsx';
import {updateNewPostTextAC, addPostActionCreator}  from './../../../Redux/profileReducer';



function MyPosts (props){

    let postElements = props.posts.map((item) => {
        return <Post message={item.message} likesCount={item.likesCount} />
    });

    let newPostElement = React.createRef();
 
    function postChange() {
        
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    function addPost() {
        props.addNewPost();
    }

    return (

        <div className={s.postsContainer}>

          <h3>My posts</h3>
            <div>
                <textarea 
                    ref={newPostElement}  
                    value={props.newPostText} 
                    onChange={postChange}
                /> <br/>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>

                {postElements}
                
            </div>

        </div>
    );
}

export default MyPosts