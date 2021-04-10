import React from 'react';
import s from './FormsControls.module.css';

const Textarea = (props) => {
    let {input, meta, ...rest} = props;

    const isError = meta.touched && meta.error;

    return (
        <div>
            <textarea className={isError ? s.error : null} {...input} {...rest} />
            <br/>
            {isError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
} 

const Input = (props) => {
    let {input, meta, ...rest} = props;

    const isError = meta.touched && meta.error;

    return (
        <div>
            <input className={isError ? s.error : null} {...input} {...rest} />
            <br/>
            {isError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
} 

export {Textarea, Input};

