import s from './ProfileInfo.module.css';
import car1 from './imgs/car1.gif';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src={car1} className={s.img1Content} />
            </div>

            <div className={s.description}>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;