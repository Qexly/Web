import s from './ProfileInfo.module.css';
import ava from './../../../assets/images/ava.png';
import Preloader from './../../common/preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks.jsx';
import {useState} from 'react';
import ProfileDataForm from './ProfileDataForm.jsx';

function ProfileInfo(props) {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) return <Preloader />
    let photo = props.profile.photos.large || ava;

    const onFileChangeHandler = (e) => {
        props.savePhoto(e.target.files[0]);
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => setEditMode(false),
            () => {}
        )
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
            {
                editMode ? 
                    <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} /> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)} />
            }
            
        </div>
    );
}

const ProfileData = (props) => {
    return (
        <div>
            <p>
                <b>Full name:</b> {props.profile.fullName}
            </p>
            <p>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </p>
            <p>
                <b>My skills:</b> {props.profile.lookingForAJobDescription}
            </p>
            <p>
                <b>About me:</b> {props.profile.aboutMe}
            </p>

            <div><b>Contacts</b></div>

            {
                Object.entries(props.profile.contacts).map((pair, i) => <Contact contactTitle={pair[0]} contactValue={pair[1]} key={i} />)
            }
            {
                props.isOwner ? <button onClick={props.goToEditMode}>Edit</button> : null
            }
        </div>
    )
}

const Contact = (props) => {
    let {contactTitle, contactValue} = props;

    return <p className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </p>
}

export default ProfileInfo;