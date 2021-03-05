import React from 'react';
import s from './Menu.module.css';
import { useState } from 'react';

const Menu = (props) => {

    let {header, items, isOpen, setIsOpen} = props;
    let active = isOpen ? s.active : null;
    return (
        <div className={`${s.menu} ${active}`}>
            <div className={`${s.blur}`} onClick={(e) => setIsOpen(false)}/>
            <div className={`${s.menu_content}`}>
                <div className={`${s.menu_header}`}>{header}</div>
                <ul>
                    {
                        items.map((item, index) => 
                            <li key={index}>
                                <a href={item.href}>{item.value}</a>
                                <img src={item.icon} />
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;