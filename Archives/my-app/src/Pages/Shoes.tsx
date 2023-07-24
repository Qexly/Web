import {ReactElement} from 'react';
import Header from 'Components/Header';
import styles from 'Pages/Shoes/Shoes.module.css'

const Shoes = (): ReactElement => {
    return (
        <>
         <Header />
            <div className={styles.container}>
                <div className={styles.filters}>
                    Панель фильтров
                    </div>
                <div>
                    Обувь
                </div>
         </div>
        </>
    )
};

export default Shoes;