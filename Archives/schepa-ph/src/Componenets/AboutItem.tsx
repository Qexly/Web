import {ReactElement} from 'react';
import {IAboutItem} from 'CONSTANTS';
import Styles from './AboutItem/styles.module.css';

interface IProps {
    item: IAboutItem,
    imgPosition: 'left'|'right'
}

const AboutItem = ({item, imgPosition}: IProps): ReactElement => {
    const imgStyle = {
        order: imgPosition === 'right' ? 1 : 0,
        marginRight: imgPosition === 'left' ? '18px' : 'inherit', 
        marginLeft: imgPosition === 'right' ? '18px' : 'inherit' 
    }
   return (
    <div className={Styles.Container}>
        <img style={imgStyle} className={Styles.Img} src={item.getImg()}/>
        <p className={Styles.Text}>{item.text}</p>
    </div>
   ) 
};

export default AboutItem;