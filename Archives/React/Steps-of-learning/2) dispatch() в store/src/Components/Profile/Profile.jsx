import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile (props){

    return (
        <div>

          <ProfileInfo />

          <MyPosts 
            posts={props.posts}
            newPostText={props.newPostText}
            dispatch={props.dispatch}
          />

        </div>
    );
}

export default Profile;
