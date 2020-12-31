import logo from './imgs/logo.png';
import s from './Header.module.css';

function Header() {
    return (
        <header>
            <img src={logo} alt='d' className={s.logo} />
        </header>
    );
}

export default Header;