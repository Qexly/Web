import {ReactElement} from 'react';
import {useEnv} from 'Components/EnviromentProvider';
import styles from 'Pages/Shoes/Shoes.module.css'
import PageLayout from 'Modules/PageLayout';
import ProductCard from 'Components/ProductCard';

import {mockedShoes} from 'api/mocks';
import classNames from 'classnames';

const shoes: any[] = mockedShoes.products;

const Shoes = (): ReactElement => {
    const {adaptiveMode, isTouch} = useEnv();

    return (
        <PageLayout>
            <div className={classNames(styles.container, {[styles.containerAdaptive]: adaptiveMode})}>
                <div className={classNames(styles.filters, {[styles.filtersAdaptive]: adaptiveMode})}>
                    Панель фильтров
                </div>
                <div className={classNames(styles.shoes, {[styles.shoesAdaptive]: adaptiveMode})}>
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