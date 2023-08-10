import {ReactElement, useState, MouseEvent, useCallback, useMemo, useRef, useEffect, TouchEvent} from 'react';
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

const ProductCard = ({name, photos, price, isTouch, showHint, className}: IProps): ReactElement => {
    const cardPhotos = useMemo(() => photos.reverse(), [photos]);
    const [currentImgindex, setImg] = useState(0);
    const [gifTimesOut, setGifOut] = useState(false);

    if (showHint) {
        setTimeout(() => setGifOut(true), 2550);
    }

    const onMouseMove = useCallback((e: MouseEvent): void => {
        const clientRect = e.currentTarget.getBoundingClientRect();

        // Координаты мыши относительно изображения
        const insideXCoord = e.clientX - clientRect.left;
        const index = (Math.floor(insideXCoord / (clientRect.width / photos.length)));
        setImg(index);

    }, [photos]);

    const onTouchEnd = useCallback((e: TouchEvent) => {
        const imgContainer = e.currentTarget;

        setTimeout(() => {
            const containerWidth = containerRef.current?.getBoundingClientRect().width || 0;
            const scrollLeft = imgContainer.scrollLeft;

            // получим индекс картинки, которая уходит за левый край
            const currentImg = Math.floor(
                scrollLeft / containerWidth
            );

            // если currentImg проскроленна дальше середины (middle), то нужно ее проскролить до конца
            const middle = containerWidth * currentImg + (containerWidth / 2);

            // индекс картинки, которую нужно отображать
            const index = scrollLeft > middle ? currentImg + 1 : currentImg

            if (containerRef.current instanceof HTMLDivElement) {
                containerRef.current.scrollLeft = containerWidth * index;
                // только этой строки недостаточно, т.к. слайдер не вызывает изменения состояния
                setImg(index)
            }
        }, 500);
    }, []);

    const getSliderClass = useCallback((index: number): string => classNames(styles.indicatorItem, {
        [styles.indicatorItemActive]: index === currentImgindex
    }), [currentImgindex]);

    const containerRef = useRef<HTMLDivElement| null>(null);

    useEffect(() => {
        if (containerRef.current instanceof HTMLDivElement) {
            containerRef.current.scrollLeft = containerRef.current?.getBoundingClientRect().width * currentImgindex;
        }
    }, [currentImgindex]);

    return (
        <div className={classNames(styles.container, className)}
             onMouseMove={(e) => !isTouch && onMouseMove(e)}
             onMouseLeave={() => !isTouch && setImg(0)}>
            <div className={styles.slider}>
                <div className={styles.imgContainer}
                     onTouchEnd={(e) => onTouchEnd(e)}
                     ref={containerRef}>
                    {
                        cardPhotos.map((item, index) => (
                            <img className={styles.photo}
                                 src={`https://${item}`}
                                 loading={index === 0 ? 'eager' : 'lazy'}
                                 key={item} />
                        ))
                    }
                </div>

                {
                    showHint && !gifTimesOut &&
                    <img className={styles.mouseGif} src={mouseGif}/>
                }

                <div className={styles.sliderIndicator}>
                    {
                        cardPhotos.map((_, index) => <div key={index} className={getSliderClass(index)}></div>)
                    }
                </div>
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
