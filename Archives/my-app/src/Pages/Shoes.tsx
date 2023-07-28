import {ReactElement} from 'react';
import styles from 'Pages/Shoes/Shoes.module.css'
import PageLayout from 'Modules/PageLayout';
import ProductCard from 'Components/ProductCard';

import {mockedShoes} from 'api/mocks';

const shoes: any[] = mockedShoes.products;

const Shoes = (): ReactElement => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <div className={styles.filters}>
                    Панель фильтров
                </div>
                <div className={styles.shoes}>
                    <div className={styles.shoesWrapper}>
                        {
                            shoes.map((item, index) => <ProductCard
                                key={index}
                                className={styles.productCard}
                                mainImage={item.imageUrl}
                                name={item.name}
                                photos={item.additionalImageUrls}
                                price={item.price.current.text}
                                showHint={index === 0}/>)
                        }
                    </div>
                </div>
            </div>
        </PageLayout>
    )
};

export default Shoes;