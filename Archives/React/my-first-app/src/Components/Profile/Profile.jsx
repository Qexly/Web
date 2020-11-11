import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile (props){

    return (
        <div>

          <ProfileInfo />

          <MyPosts 
            posts={props.posts} 
            addPost={props.addPost}
            changeNewPostText={props.changeNewPostText} 
            newPostText={props.newPostText}
          />

        </div>
    );
}

export default Profile;
