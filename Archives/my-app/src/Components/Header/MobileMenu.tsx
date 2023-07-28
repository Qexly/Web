import {ReactElement, FC} from 'react';
import styles from './MobileMenu/styles.module.css';
import classNames from 'classnames';
import close from 'assets/imgs/close.png';

interface IProps {
    opened: boolean;
    onClose: Function;
    ItemsRender: FC;
}

const MobileMenu = ({opened, onClose, ItemsRender}: IProps): ReactElement => {
    return (
        <div className={classNames({[styles.layout]: opened})}>
            <div className={classNames(styles.container, {[styles.opened]: opened})}>
                <img src={close}
                     className={styles.close}
                     onClick={() => onClose()} />
                <ItemsRender />
            </div>
        </div>
    )
};

export default MobileMenu;