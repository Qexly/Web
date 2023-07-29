import {ReactElement, useState, MouseEvent, useCallback, useMemo} from 'react';
import classNames from 'classnames';
import styles from 'Components/ProductCard/styles.module.css'

import mouseGif from 'assets/imgs/hand-swipe.gif';

interface IProps {
    name: string;
    photos: string[];
    price: string;
    mainImage?: string;
    showHint?: boolean;
    className?: string;
    isTouch?: boolean;
}

const ProductCard = ({name, photos, price, mainImage, showHint, className}: IProps): ReactElement => {
    const cardPhotos = useMemo(() => photos.reverse(), [photos]);
    const [currentImgindex, setImg] = useState(0);
    const [gifTimesOut, setGifOut] = useState(false);

    if (showHint) {
        setTimeout(() => setGifOut(true), 2550);
    }

    const mouseMoveHandler = useCallback((e: MouseEvent): void => {
        const clientRect = e.currentTarget.getBoundingClientRect();

        // Координаты мыши относительно изображения
        const insideXCoord = e.clientX - clientRect.left;
        const index = (Math.floor(insideXCoord / (clientRect.width / photos.length)));
        setImg(index);

    }, [photos]);

    const getSliderClass = useCallback((index: number): string => classNames(styles.indicatorItem, {
        [styles.indicatorItemActive]: index === currentImgindex
    }), [currentImgindex]);

    const currentSrc = useMemo(() => `https://${cardPhotos[currentImgindex]}`, [currentImgindex]);

    return (
        <div className={classNames(styles.container, className)}
             onMouseMove={(e) => mouseMoveHandler(e)}
             onMouseLeave={() => setImg(0)}>
            <div className={styles.slider}>
                <img className={styles.photo}
                     src={currentSrc}/>

                <div className={styles.sliderIndicator}>
                    {
                        cardPhotos.map((_, index) => <div key={index} className={getSliderClass(index)}></div>)
                    }
                </div>

                {
                    showHint && !gifTimesOut &&
                    <img className={styles.mouseGif} src={mouseGif}/>
                }
            </div>

            <span className={classNames('truncate', styles.name)}>
                {name.toUpperCase()}
            </span>

            <span className={styles.price}>
                {price}
            </span>
        </div>
    )
};

export default ProductCard;
