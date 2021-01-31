import React from "react";
import Header from "./Header.jsx";
import {connect} from 'react-redux';
import {getAuthUserData} from './../../Redux/auth-reducer.js'

class HeaderContainerAPI extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

const HeaderContainerContext = connect(mapStateToProps, {getAuthUserData})(HeaderContainerAPI);

export default HeaderContainerContext;