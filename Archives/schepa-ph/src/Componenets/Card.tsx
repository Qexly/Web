import {ReactElement} from 'react';
import Styles from './Card/styles.module.css';
import {ICard} from 'CONSTANTS';

const Card = ({card}: {card: ICard}): ReactElement => {
    return (
        <div className={Styles.Container}>
            <img className={Styles.Img} src={card.getImg()} />
            <div className={Styles.TextContent}>
                <span className={Styles.Fraction}>Фракция: <span className={Styles.TextValue}>{card.fraction}</span></span>
                <span>Фасовка: мешок {card.displacement}</span>
            </div>
        </div>
    );
};

export default Card;