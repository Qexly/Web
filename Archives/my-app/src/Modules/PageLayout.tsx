import {ReactElement} from 'react';
import Header from 'Components/Header';
import styles from './PageLayout/styles.module.css';
import {useEnv} from "../Components/EnviromentProvider";

interface IProps {
    children: JSX.Element;
}

const PageLayout = ({children}: IProps): ReactElement => {
    const {adaptiveMode} = useEnv();

    return (
        <div className={styles.container}>
            <Header adaptiveMode={adaptiveMode} />
            <div className={styles.content}>
                {
                    children
                }
            </div>
        </div>
    )
};

export default PageLayout;