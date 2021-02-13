import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../Redux/profileReducer.js';
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

    render() {
        return (
            <Profile {...this.props} /> 
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
    connect(mapStateToProps, {getUserProfile, getUserStatus,  updateUserStatus}),  //Рендер идет сверху вниз - от коры к ядру
    withRouter,
    withAuthRedirect
)(ProfileContainer)
/*
let ProfileAuthRedirect = withAuthRedirect(ProfileContainer);

let UrlComponent = withRouter(ProfileAuthRedirect);

export default connect(mapStateToProps, {getUserProfile})(UrlComponent);
*/



