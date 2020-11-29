import MyPosts from './MyPosts.jsx';
import {updateNewPostTextAC, addPostActionCreator}  from './../../../Redux/profileReducer';

export default function MyPostsContainer(props) {

    function onPostChange(text) {
        props.store.dispatch(updateNewPostTextAC(text));
    }

    function onAddPost() {
        props.store.dispatch(addPostActionCreator());
    }

    return(
        <MyPosts updateNewPostText={onPostChange} addNewPost={onAddPost} posts={props.store.getState().profilePage.postData} />
    )
}