import {ReactElement} from 'react';
import Styles from './Header/styles.module.css'
import logo from 'Assets/imgs/logo.png'
import classNames from 'classnames';
import phone from 'Assets/imgs/phone.png';

const Header = (): ReactElement => {
    return (
        <header className={Styles.Container}>
            <div className={classNames(Styles.menu, Styles.headerSection)}></div>
            <div className={classNames(Styles.logo, Styles.headerSection)}>
                <img src={logo} className={Styles.logoImg} />
                <span className={Styles.logoTitle}>Щепа высшего сорта</span>
            </div>
            <div className={classNames(Styles.headerSection, Styles.ContactsSection)}>
                <div className={Styles.phoneImgContainer}>
                    <img src={phone}></img>
                </div>
                <span>+7 (921) 834-50-27</span>
            </div>
        </header>
    )
};

export default Header;