import {ReactElement} from 'react';
import Header from 'Components/Header';
import styles from 'Pages/Shoes/Shoes.module.css'

import ProductCard from 'Components/ProductCard';
import {useEnv} from 'Components/EnviromentProvider';

import {mockedShoes} from 'api/mocks';

const shoes: any[] = mockedShoes.products;

const Shoes = (): ReactElement => {
    const {adaptiveMode} = useEnv();

    return (
        <>
            <Header adaptiveMode={adaptiveMode} />
            <div className={styles.container}>
                <div className={styles.filters}>
                    Панель фильтров сверху для адаптива
                </div>
                <div className={styles.shoes}>
                    <div className={styles.shoesWrapper}>
                    {
                        shoes.map((item, index) => <ProductCard
                            className={styles.productCard}
                            mainImage={item.imageUrl}
                            name={item.name}
                            photos={item.additionalImageUrls}
                            price={item.price.current.text}
                            showHint={index === 0} />)
                    }
                    </div>
                </div>
            </div>
        </>
    )
};

export default Shoes;