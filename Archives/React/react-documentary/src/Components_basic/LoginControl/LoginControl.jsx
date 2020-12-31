import React from 'react';
import Greeting from './../Greeting/Greeting.jsx';

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Войти
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Выйти
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLogginIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        this.setState((state, props) => {
            return (
                {isLogginIn: !state.isLogginIn}
            );
        });
    }

    render() {
        const isLogginIn = this.state.isLogginIn;
        let button;

        if (isLogginIn) {
            button = <LogoutButton onClick={this.handleLoginClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div> 
                <Greeting isLogginIn={isLogginIn} />
                {button};
            </div>
        )
    }
}

export default LoginControl;