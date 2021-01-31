import React from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focus() {
        this.inputRef.current.focus();
    }

    render() {
        setTimeout(() => this.focus(), 3000)
        return (
            <input type="text" ref={this.inputRef} />
        )
    }
}

export default CustomTextInput;