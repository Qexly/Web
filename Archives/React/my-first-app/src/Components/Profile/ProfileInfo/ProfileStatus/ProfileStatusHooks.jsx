import React, { useState, useEffect } from 'react';

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status); //Статус сначала пустой приходит, а когда запрос выполняется - приходит новый, но его надо засетать в status

    useEffect(() => {
        if (editMode) textInput.current.focus();
    });

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let textInput = React.createRef()

    const onToggleEditModeHandler = (e) => {
        setEditMode(!editMode);
        if (e.type === 'blur') props.updateStatus(status);
    }

    const onChangeInput = (e) => {
        setStatus(e.target.value); 
    }

    let result = !editMode ? (
        <div>
            <span onDoubleClick={onToggleEditModeHandler}>{props.status || 'null'}</span>
        </div>
    ) : (
            <div>
                <input typoe="text "ref={textInput} value={status}
                    onChange={onChangeInput}
                    onBlur={onToggleEditModeHandler}
                />
            </div>
        );

    return (
        <div>
            {result}
        </div>
    )
}

export default ProfileStatusHooks;

