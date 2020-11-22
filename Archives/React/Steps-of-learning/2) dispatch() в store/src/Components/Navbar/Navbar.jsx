import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar (){
    return (
        <div>
            <nav>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='#'>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='#'>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='#'>Settings</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
