import React from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import Preloader from '../common/preloader/Preloader.jsx';
import Profile from './Profile.jsx';
import {onSetUserProfile} from './../../Redux/profileReducer.js';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId || '2';
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(responce => {
            this.props.onSetUserProfile(responce.data);
        }) 
    }

    render() {
        return (
            <Profile {...this.props} /> 
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
}

let UrlComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {onSetUserProfile})(UrlComponent);



