import React from "react";

export function UserGreeting() {
    return <h1>С возвращением!</h1>;
}

export function GuestGreeting() {
    return <h1>Войдите, пожалуйста.</h1>;
}

interface IGreetingProps {
    isLoggedIn: boolean,
}

const Greeting: React.FC<IGreetingProps> = (props) => {
    const { isLoggedIn } = props;
    if (isLoggedIn) return <UserGreeting />
    return <GuestGreeting />
}

export default Greeting;