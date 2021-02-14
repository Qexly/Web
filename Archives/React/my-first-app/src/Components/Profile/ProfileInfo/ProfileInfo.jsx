import s from './ProfileInfo.module.css';
import ava from './../../../assets/images/ava.png';
import Preloader from './../../common/preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks.jsx';

function ProfileInfo(props) {
    if (!props.profile) return <Preloader />
    let photo = props.profile.photos.large || ava;

    const onFileChangeHandler = (e) => {
        props.savePhoto(e.target.files[0]);
    }

    return (
        <div>
            <div className={s.description}>
                <img src={photo} style={{width: '120px'}}/>
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <p>
            {
                props.isOwner ? <input type="file" onChange={onFileChangeHandler}/> : null
            }
            </p>
        </div>
    );
}

export default ProfileInfo;