import React from 'react';
import s from './ChildrenExperiments.module.css';

function FancyBorder(props) {
    return (
        <div className={s.fancyBorder}>
            {props.children}
        </div>
    )
}

export default FancyBorder;