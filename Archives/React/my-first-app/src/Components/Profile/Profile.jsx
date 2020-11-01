import car1 from './imgs/car1.png';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

function Profile (){
    return (
        <div>
          <div>
            <img src={car1} className={s.img1Content} />
          </div>
          
          <div>
            ava + description
          </div>

          <MyPosts />

        </div>
    );
}

export default Profile;
