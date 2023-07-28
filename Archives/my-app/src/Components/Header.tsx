import {ReactElement, Component, useEffect, useState} from 'react';
import styles from './Header/styles.module.css';
import {Link} from 'react-router-dom';
import Burger from 'assets/imgs/burger.svg';
import classNames from 'classnames';
import Button from 'UI/Button';

import TempMenu from 'Components/Header/MobileMenu';

type NavItem = {
    title: string;
    href: string;
};

const navItems: NavItem[] = [
    {
        title: 'ОБУВЬ',
        href: '/shoes'
    },
    {
        title: 'ОДЕЖДА',
        href: '/clothing'
    },
    {
        title: 'BRANDS',
        href: '/'
    }
];

const infoItems: NavItem[] = [
    {
        title: 'КОРЗИНА',
        href: '/'
    }
]

/*
const clickHandler = async (e: MouseEvent): Promise<void> => {
    const {fetchPosts} = await import('api/queries');
    const response = (await fetchPosts()).data;
};
*/

interface IProps {
    adaptiveMode?: boolean;
}

interface IMenuItems {
    itemClass?: string;
}

const DesktopMenu = (): ReactElement => (
    <div className={styles.desktopMenu}>
        <MenuItems />
    </div>
);

const MenuItems = ({itemClass}: IMenuItems): ReactElement => (
    <>
        {
            navItems.map(item => <Link
                className={classNames(styles.menuItem, 'Link', itemClass)}
                to={item.href}
                key={item.title}>
                {item.title}
            </Link>)
        }
    </>
);

const AdaptiveMenu = (): ReactElement => {
    const [MobileMenu, setMobileMenu] = useState<any>();
    const [opened, setOpened] = useState<boolean>(false);

    useEffect(() => {
        const importMenu = async () => {
            const Menu = (await import('Components/Header/MobileMenu')).default;
            setMobileMenu(() => Menu);
        }

        importMenu();
    } , []);

    return (
        <div className={styles.adaptiveMenu}>
            <img className={`${styles.burger}`}
                 src={Burger}
                 onClick={() => setOpened(true)}/>
            {
                MobileMenu &&
                <MobileMenu opened={opened}
                            onClose={() => setOpened(false)}
                            navItems={navItems}
                            ItemsRender={() => <MenuItems itemClass={classNames(styles.mobileMenuItem)} />}/>
            }
        </div>
    )
};

const Header = ({adaptiveMode}: IProps): ReactElement => {
    return (
        <div className={classNames(styles.header, {[styles.headerAdaptive]: adaptiveMode})}>
            {
                adaptiveMode ? <AdaptiveMenu /> :  <DesktopMenu />
            }
        
            <div className={styles.logo}>
                <Link to="/" className="Link">
                    <span>BRANDNAME</span>
                </Link>
            </div>

            <div className={`${styles.info}`}>
                {
                    infoItems.map(item => <Link
                        className={`${styles.menuItem} ${styles.cartItem} Link`}
                        to={item.href}
                        key={item.title}>
                        {item.title}
                    </Link>)
                }
            </div>
        </div>
    )
};

export default Header;