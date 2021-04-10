import React from 'react';

function CustomTextInput(props) {
    return (
        <div>
            children
            <input type="text" ref={props.inputRef} />
        </div>
    )
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.texInput = React.createRef();
    }
    
    focus() {
        this.texInput.current.focus();
    }

    render() {
        setTimeout(() => this.focus(), 3000);
        return (

            <CustomTextInput inputRef={this.texInput} />
        )
        
    }
}

export default Parent;