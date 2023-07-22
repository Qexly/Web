import {ReactElement, MouseEventHandler} from 'react';
import styles from './Button/styles.module.css';

interface IProps {
    children?: JSX.Element;
    caption: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean; // атрибут/для ссылки поддержать
    active?: boolean;
    attrs?: object;
    linkMode?: boolean;
}

const Button = ({onClick, caption}: IProps): ReactElement=> {
    return (
        <button onClick={onClick}>
            {caption}
        </button>
    )
};

Button.defaultProps = {};

export default Button;