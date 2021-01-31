import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const withAuthRedirect = (Component) => {
    
    class RedirectComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />

            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export {withAuthRedirect};