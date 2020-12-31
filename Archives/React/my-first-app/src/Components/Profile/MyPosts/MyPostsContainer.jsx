import MyPosts from './MyPosts.jsx';
import {updateNewPostTextAC, addPostActionCreator}  from './../../../Redux/profileReducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text));
        },
        addNewPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
