import React from 'react';

function Greeting(props) {

    const isLogged = props.isLogginIn;

    if (isLogged) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}

function UserGreeting(props) {
    return (
        <h1>Добро пожаловать</h1>
    );
}

function GuestGreeting(props) {
    return (
        <h1>Необходимо войти</h1>
    );
}

export default Greeting;