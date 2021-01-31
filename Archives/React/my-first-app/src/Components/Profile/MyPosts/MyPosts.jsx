import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post.jsx';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from "./../../../Utils/Validators.js";
import { Textarea } from './../../common/FormsControls/FormsControls.jsx';

let maxLength10 = maxLengthCreator(10);

function MyPosts (props){

    let postElements = props.posts.map((item) => {
        return <Post message={item.message} likesCount={item.likesCount} />
    });

    function addPost(formData) {
        props.addNewPost(formData.newPostText);
    }

    return (
        <div className={s.postsContainer}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={addPost} />
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" placeholder="Write a message" validate={[required, maxLength10]}/>
            <br />
            <button>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'postForm'})(PostForm);

export default MyPosts