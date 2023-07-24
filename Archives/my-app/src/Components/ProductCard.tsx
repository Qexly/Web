import {ReactElement} from 'react';
import styles from 'Components/ProductCard/styles.module.css'

interface IProps {
    name: string;
    photos: string[];
    price: string;
}

const ProductCard = ({name, photos, price}: IProps): ReactElement => {
    return (
        <div className={styles.container}>
            <img />
        </div>
    )
};

export default ProductCard;