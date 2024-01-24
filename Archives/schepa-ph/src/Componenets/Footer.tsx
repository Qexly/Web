import {ReactElement, useState} from 'react';
import Styles from './Footer/styles.module.css';
import {PHONE, MAIL} from 'CONSTANTS';
import logo from 'Assets/imgs/logo.png'
import {useEnv} from 'Componenets/EnviromentProvider';

const Footer = (): ReactElement => {
    const {adaptiveMode} = useEnv();
    return (
        <div className={Styles.Container}>
            <div className={Styles.Contacts}>
                <span>{PHONE}</span>
                <span>{MAIL}</span>
            </div>
            <div className={Styles.Sample}>
                Вышлем образцы  щепы в любой регион
            </div>
            {
                !adaptiveMode && <img className={Styles.logoImg} src={logo} />
            }
        </div>
    )
}

export default Footer;