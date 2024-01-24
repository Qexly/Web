import {ReactElement} from 'react';
import Header from 'Componenets/Header';
import Styles from './PageLayout/styles.module.css';
import {FULL_HEIGHT_CLASS} from 'CONSTANTS';
import Footer from 'Componenets/Footer';
import classNames from 'classnames';

interface IProps {
    children: JSX.Element;
}

const PageLayout = ({children}: IProps): ReactElement => {
    return (
        <div className={FULL_HEIGHT_CLASS}>
            <Header/>
            <div className={ classNames(FULL_HEIGHT_CLASS)}>
                {children}
            </div>
            <Footer />
        </div>
    )
};

export default PageLayout;