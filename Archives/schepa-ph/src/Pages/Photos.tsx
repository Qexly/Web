import {ReactElement} from 'react';
import PageLayout from 'Modules/PageLayout';
import Slider from 'Componenets/Slider';
import Styles from './Photos/styles.module.css';

export const Component = (): ReactElement => {
    return (
        <PageLayout>
            <div className={Styles.Container}>
                <Slider className={Styles.Slider} />
            </div>
        </PageLayout>
    )
};

