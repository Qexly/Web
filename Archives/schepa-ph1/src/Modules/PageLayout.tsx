import {ReactElement} from 'react';
import Header from 'Componenets/Header';
import Styles from './PageLayout/styles.module.css';
import {FULL_HEIGHT_CLASS} from 'CONSTANTS';

interface IProps {
    children: JSX.Element;
}

const PageLayout = ({children}: IProps): ReactElement => {
    return (
        <div className={FULL_HEIGHT_CLASS}>
            <Header/>
            <div className={FULL_HEIGHT_CLASS}>
                {children}
            </div>
        </div>
    )
};

export default PageLayout;