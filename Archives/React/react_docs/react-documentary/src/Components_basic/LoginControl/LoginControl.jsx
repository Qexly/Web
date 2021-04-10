import React from "react";
import Greeting from '../Greeting/Greeting.jsx';

function LoginLogoutButton(props) {
   if (props.LoggedIn) return (
       <button onClick={props.onClick}>Выйти</button>
   )

   return (
    <button onClick={props.onClick}>Войти</button>
   )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LoggedIn: false,
        }
    }

    onClickButton() {
        this.setState((state, props) => {
            return {
                LoggedIn: !state.LoggedIn,
            }
        })
    }

    render() {
        return(
            <div>
                <Greeting isLoggedIn={this.state.LoggedIn} />
                <LoginLogoutButton LoggedIn={this.state.LoggedIn} onClick={this.onClickButton.bind(this)} />
            </div>
        )
    }
}



export default LoginControl;