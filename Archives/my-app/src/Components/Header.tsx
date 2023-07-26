import {ReactElement} from 'react';
import styles from './Header/styles.module.css';
import {Link} from 'react-router-dom';
import Burger from 'assets/imgs/burger.svg';
import classNames from 'classnames';
import Button from 'UI/Button';

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
        href: '/shoes'
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

const DesktopMenu = (): ReactElement => (
    <div className={styles.desktopMenu}>
        {
            navItems.map(item => <Link
                className={`${styles.menuItem} Link`}
                to={item.href}
                key={item.title}>
                {item.title}
            </Link>)
        }
    </div>
);

const AdaptiveMenu = (): ReactElement => (
    <div className={styles.adaptiveMenu}>
        <img className={`${styles.burger}`} src={Burger} />
    </div>
);

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