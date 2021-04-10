import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from './../../Redux/profileReducer.js';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'; 
import { withAuthRedirect } from './../../HOCs/withAuthRedirect.jsx';

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authorizedId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) this.componentDidMount();
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId} /> 
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedId: state.auth.id,
        isAuth: state.auth.isAuth,
    };
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus,  updateUserStatus, savePhoto, saveProfile}),  //Рендер идет сверху вниз - от коры к ядру
    withRouter,
    withAuthRedirect
)(ProfileContainer)
/*
let ProfileAuthRedirect = withAuthRedirect(ProfileContainer);

let UrlComponent = withRouter(ProfileAuthRedirect);

export default connect(mapStateToProps, {getUserProfile})(UrlComponent);
*/



