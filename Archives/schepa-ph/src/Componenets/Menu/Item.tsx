import {ReactElement} from 'react';
import {INavItem} from 'CONSTANTS';
import {NavLink} from 'react-router-dom';

const Item = ({item, className}: {item: INavItem, className: string}): ReactElement => (
    <NavLink className={className} to={item.href}>
        {item.title}
    </NavLink>
); 

export default Item;