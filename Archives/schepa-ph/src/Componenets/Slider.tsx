import {
    ReactElement,
    useState,
    useRef,
    useEffect,
    useCallback,
    MouseEvent,
    useMemo
} from 'react';
import Styles from './Slider/styles.module.css'
import {PHOTOS} from 'CONSTANTS';
import Arrow from 'Assets/imgs/photos/arrow.png';
import classNames from 'classnames';

interface IProps {
    className?: string;
}

enum DIRECTIONS {
    left,
    right
}

export const Slider = ({className}: IProps): ReactElement => {
    const photoContainer = useRef<any>();
    const imgCount = PHOTOS.length;
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const setScroll = () => {
            const container = photoContainer.current;
            container.scrollLeft = currentImg * container?.getBoundingClientRect().width;
        };

        setScroll();

        const resizeObserver = new ResizeObserver((entries, observer) => {
            const [slider] = entries;
            if (slider.contentRect.width) {
                setScroll();
            }
        });

        resizeObserver.observe(photoContainer.current);

        return () => resizeObserver.disconnect();

    }, [currentImg]);

    const onArrowClick = useCallback((direction: DIRECTIONS, e: MouseEvent) => {
        if (direction === DIRECTIONS.left && currentImg === 0) {
            return;
        }

        if (direction === DIRECTIONS.right && currentImg === imgCount - 1) {
            return;
        }

        if (direction === DIRECTIONS.left) {
            setCurrentImg(currentImg - 1);
        } else {
            setCurrentImg(currentImg + 1);
        }
    }, [currentImg]);

    return (
        <div className={classNames(Styles.Container, className)}>
            <img src={Arrow}
                className={classNames(Styles.Arrow)} 
                onClick={e => onArrowClick(DIRECTIONS.left, e)} />
            <div className={Styles.PhotoContainer}
                ref={photoContainer}>
                {
                    PHOTOS.map((photo, i) => (
                        <img key={i} className={Styles.Img} src={photo.getImg()} />
                    ))
                }
            </div>
            <img src={Arrow}
                className={classNames(Styles.Arrow, Styles.ArrowRight)} 
                onClick={e => onArrowClick(DIRECTIONS.right, e)}/>
        </div>
    )
};

export default Slider;
