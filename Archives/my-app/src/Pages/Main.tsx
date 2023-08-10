import {ReactElement} from 'react';
import PageLayout from 'Modules/PageLayout';
import styles from './Main/styles.module.css';
import mainImg from 'assets/imgs/clothing.jpg';

const Main = (): ReactElement => {
    return (
        <PageLayout>
            <div className={styles.container}
            style={{backgroundImage: `url(${mainImg})`}}>
                <div className={styles.containerLayout}>
                    <h1 className={styles.title}>“HANDMADE IN PORTUGAL WITH LOVE AND CARE”</h1>
                    <p className={styles.subTitle}>
                        At NoBrand we use high quality raw materials in order to provide greater comfort.
                        All products are 100% created, developed and produced in Portugal.
                    </p>
                </div>
            </div>
        </PageLayout>
    )
};

export default Main;