import s from './ProfileInfo.module.css';
import car1 from './imgs/car1.gif';
import ava from './../../../assets/images/ava.png';
import Preloader from './../../common/preloader/Preloader.jsx';

function ProfileInfo(props) {
    if (!props.profile) return <Preloader />
    return (
        <div>
            <div>
                <img src={car1} className={s.img1Content} />
            </div>

            <div className={s.description}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;