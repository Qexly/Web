import {ReactElement} from 'react';
import {IAdvantage} from 'CONSTANTS';
import Styles from './Advantage/styles.module.css';

const Advantage = ({advantage}: {advantage: IAdvantage}): ReactElement => (
    <div className={Styles.Advantage}>
        <img src={advantage.getImg()} className={Styles.AdvantageImg} />
        <div className={Styles.AdvantageText}>{advantage.text}</div>
    </div>
);

export default Advantage
