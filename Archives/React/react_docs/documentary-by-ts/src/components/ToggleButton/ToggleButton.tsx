import React, {useState, useCallback} from 'react';

const ToggleButton:React.FC = () => {

    const [isToggleOn, setToggle] = useState<boolean>(true);

    const buttonClickHandler = useCallback((e: React.MouseEvent) => {
        setToggle((value) => !value)
    }, []);

    return (
        <div>
            <button onClick={(e) => buttonClickHandler(e)}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

export default ToggleButton;