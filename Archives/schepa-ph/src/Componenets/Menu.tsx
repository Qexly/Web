import {ReactElement, FC, useState, useEffect, forwardRef, ForwardedRef, useImperativeHandle} from 'react';
import {NAV_ITEMS} from 'CONSTANTS';
import Styles from './Menu/styles.module.css';
import {useEnv} from 'Componenets/EnviromentProvider';
import Item from 'Componenets/Menu/Item';

interface IProps {
    open?: boolean;
    onClose?: Function
}

const Menu = forwardRef(({open, onClose}: IProps, ref: ForwardedRef<any>): ReactElement => {
    const env = useEnv();
    const [MobilePanel, setMobilePanel] = useState<FC<any> | null>(null);
    const [isPanelOpened, setPanelOpened] = useState<boolean>(false);

    useEffect(() => {
        if (env.adaptiveMode) {
            import('./Menu/MobilePanel').then(
                ({default: Componenent}) => setMobilePanel(() => Componenent)
            );
        }
    }, [env.adaptiveMode]);

    useImperativeHandle(ref, () => ({
        open: () => setPanelOpened(true),
    }));

    return (
        !env.adaptiveMode ?
            <div className={Styles.Container}>
                {
                    NAV_ITEMS.map(item => <Item key={item.title} className={Styles.Item} item={item} />)
                }
            </div> :
            <>
                <img className={Styles.Burger}
                    src={require('Assets/imgs/menu/burger.svg').default}
                    onClick={() => setPanelOpened(true)} />
                {
                    MobilePanel !== null ?
                        <MobilePanel opened={isPanelOpened}
                            items={NAV_ITEMS}
                            onClose={() => setPanelOpened(false)} /> :
                        null
                }
            </>
    )
});

export default Menu;