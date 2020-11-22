import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post.jsx';

function MyPosts (props){

    let postElements = props.posts.map((item) => {
        return <Post message={item.message} likesCount={item.likesCount} />
    });

    let newPostElement = React.createRef();

    function postChange() {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    function addPost() {
        props.dispatch({type: 'ADD-POST'});
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