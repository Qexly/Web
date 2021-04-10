import React from "react";

function UserGreeting() {
    return (
        <div>
            <h1>С Возвращением!</h1>
        </div>
    )
}

function GuestGreeting() {
    return (
        <div>
            <h1>Войдите, пожалуйста</h1>
        </div>
    )
}

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
                }
            </div>
        )
    }
}

export default Greeting;
