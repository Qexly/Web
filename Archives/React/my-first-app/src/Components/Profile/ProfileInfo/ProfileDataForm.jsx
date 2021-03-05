import React from 'react';
import { Field, reduxForm } from "redux-form";

const ProfileDataForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            {
                props.error ? <span style={{color: 'red'}}>{props.error}<br/></span> : null
            }
            <div>
                <button >Save</button>
            </div>
            <p>
                <b>Full name:</b> <Field type="text" placeholder="Enter name" name="fullName" component="input" / >
            </p>
            <p>
                <b>Looking for a job:</b> <Field type="checkbox" name="lookingForAJob" component="input" / >
            </p>
            <p>
                <b>My skills:</b> <Field  placeholder="Write about your skills" name="lookingForAJobDescription" component="textarea" / >
            </p>
            <p>
                <b>About me:</b> <Field  placeholder="Write about yourself" name="aboutMe" component="textarea" / >
            </p>

            <div><b>Contacts</b></div>

            {
               Object.keys(props.profile.contacts).map((key, i) => <p>
                   {key}: <Field type="text" placeholder={key} name={`contacts.${key}`} component="input" key={i} / >
               </p>)
            }
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({
    form: 'edit-profile',
})(ProfileDataForm)

export default ProfileDataFormRedux;
