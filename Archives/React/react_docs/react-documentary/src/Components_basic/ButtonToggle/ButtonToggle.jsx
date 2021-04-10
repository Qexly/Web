import React from 'react';


class ButtonToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
        }
    }

    buttonOnClickHandler(e) {
        this.setState((state, props) => ({toggle: !state.toggle}));
    }

    render() {
        return(
            <div>
                <button onClick={this.buttonOnClickHandler.bind(this)}>
                    {
                        this.state.toggle ? 'ON' : 'OFF'
                    }
                </button>
            </div>
        )
    }
}

export default ButtonToggle;
