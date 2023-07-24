import {ReactElement} from 'react';
import styles from './Header/styles.module.css';
import {Link} from 'react-router-dom';
import {useEnv} from 'Components/EnviromentProvider';
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

const Header = (): ReactElement => {
    const ENV = useEnv();

    return (
        <div className={styles.header}>
            <div className={styles.menu}>
            {
                navItems.map(item => <Link
                    className={`${styles.menuItem} Link`}
                    to={item.href}
                    key={item.title}>
                    {item.title}
                </Link>)
            }
            </div>

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