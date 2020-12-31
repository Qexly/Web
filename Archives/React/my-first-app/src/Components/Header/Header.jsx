import logo from './imgs/logo.png';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <img src={logo} alt='d' className={s.logo} />
            <div className={s.loginBlock}> 
            {props.isAuth ?
            props.login :
                <NavLink to='/login'> 
                    Login
                </NavLink>}
            </div>
        </header>
    );
}

export default Header;