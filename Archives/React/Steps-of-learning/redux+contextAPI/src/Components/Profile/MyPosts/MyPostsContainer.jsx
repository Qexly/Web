import MyPosts from './MyPosts.jsx';
import {updateNewPostTextAC, addPostActionCreator}  from './../../../Redux/profileReducer';
import StoreContext from '../../../StoreContext.js';

export default function MyPostsContainer(props) {

    return (

        <StoreContext.Consumer>{
            (store) => {
                function onPostChange(text) {
                    store.dispatch(updateNewPostTextAC(text));
                }
            
                function onAddPost() {
                    store.dispatch(addPostActionCreator());
                }

                let state = store.getState();
                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addNewPost={onAddPost}
                        posts={state.profilePage.postData}
                        newPostText={state.profilePage.newPostText}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}