import React, { useState } from "react";
import Greeting from "../Greeting/Greeting";

interface IButtonProps {
    onClick: () => void,
}

function LoginButton (props: IButtonProps): JSX.Element {
    return (
      <button onClick={props.onClick}>
        Войти
      </button>
    );
  }
  
  function LogoutButton(props: IButtonProps): JSX.Element {
    return (
      <button onClick={props.onClick}>
        Выйти
      </button>
    );
  }

const LoginControl: React.FC = () => {

    const [isLoggedIn, toggleLogin] = useState<boolean>(false);

    const onButtonClickHandler = () => {
        toggleLogin((value) => !value);
    }
    
    const button = isLoggedIn ? 
        <LogoutButton onClick={onButtonClickHandler}/> : 
        <LoginButton onClick={onButtonClickHandler} />

    return (
        <>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        </>
    )
}

export default LoginControl;