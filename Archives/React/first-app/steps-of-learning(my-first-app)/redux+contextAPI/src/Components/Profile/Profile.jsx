import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

function Profile (props){

    return (
        <div>
          <ProfileInfo />
          <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
