import {ReactElement, useRef} from 'react';
import Styles from './Header/styles.module.css'
import logo from 'Assets/imgs/logo.png'
import classNames from 'classnames';
import phone from 'Assets/imgs/phone.png';
import {useEnv} from 'Componenets/EnviromentProvider';
import Menu from 'Componenets/Menu';
import {useNavigate} from 'react-router-dom';
import {PHONE} from 'CONSTANTS';

const Header = (): ReactElement => {
    const {adaptiveMode} = useEnv();
    const navigate = useNavigate();
    const menuRef = useRef<any>();

    return (
        <header className={Styles.Container}>
            <div className={classNames(Styles.menu, Styles.headerSection)}>
                <Menu ref={menuRef}/>
            </div>
            <div className={classNames(Styles.logo, Styles.headerSection)}
                onClick={() => navigate('/')}>
                <img src={logo}
                    className={Styles.logoImg} />
                {
                    !adaptiveMode && <span className={Styles.logoTitle}>
                        Щепа высшего сорта
                    </span>
                }
            </div>
            <div className={classNames(Styles.headerSection, Styles.ContactsSection)}>
                <div className={Styles.phoneImgContainer}
                    onClick={() => menuRef.current?.open()} >
                    <img className={Styles.phoneImg}
                        src={phone}  />

                </div>
                {
                    !adaptiveMode && <span className={Styles.ContactsPhone}>
                        {PHONE}
                    </span>
                }
            </div>
        </header>
    )
};

export default Header;