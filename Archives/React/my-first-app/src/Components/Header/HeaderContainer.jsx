import React from "react";
import Header from "./Header.jsx";
import {connect} from 'react-redux';
import Axios from 'axios'; 
import {onSetAuthUserData} from './../../Redux/auth-reducer.js'


class HeaderContainerAPI extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(responce => {
              if (responce.data.resultCode === 0) {
                this.props.onSetAuthUserData(responce.data.data); 
              }
            }); 
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

const HeaderContainerContext = connect(mapStateToProps, {onSetAuthUserData})(HeaderContainerAPI);

export default HeaderContainerContext;