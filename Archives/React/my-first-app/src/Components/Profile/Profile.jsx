import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

function Profile (props){

    return (
        <div>
          <ProfileInfo profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateUserStatus}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto} 
          />
          <MyPostsContainer />
        </div>
    );
}

export default Profile;
