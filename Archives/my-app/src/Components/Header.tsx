import {ReactElement, MouseEvent} from 'react';
import styles from './Header/styles.module.css';
import Button from 'UI/Button';

type NavItem = {
    title: string;
    href: string;
};

const Items: NavItem[] = [
    {
        title: 'Мужское',
        href: '#'
    },
    {
        title: 'Женское',
        href: '#'
    },
    {
        title: 'Обувь',
        href: '#'
    }
];

const clickHandler = async (e: MouseEvent): Promise<void> => {
    const {fetchPosts} = await import('api/queries');
    const response = (await fetchPosts()).data;
};

const Header = (): ReactElement => {
    return (
        <>
            {
                Items.map(item => <a
                    className={styles.headerItem}
                    href={item.href}
                    key={item.title}>
                    {item.title}
                </a>)
            }
            <Button caption="Запрос" onClick={clickHandler} />
        </>
    )
};

export default Header;