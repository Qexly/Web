import {ReactElement} from 'react';
import Styles from './Header/styles.module.css'
import logo from 'Assets/imgs/logo.png'
import classNames from 'classnames';

const Header = (): ReactElement => {
    return (
        <header className={Styles.Container}>
            <div className={classNames(Styles.menu, Styles.headerSection)}></div>
            <div className={classNames(Styles.logo, Styles.headerSection)}>
                <img src={logo} className={Styles.logoImg} />
                <span className={Styles.logoTitle}>Щепа высшего сорта</span>
            </div>
            <div className={classNames(Styles.headerSection)}></div>
        </header>
    )
};

export default Header;