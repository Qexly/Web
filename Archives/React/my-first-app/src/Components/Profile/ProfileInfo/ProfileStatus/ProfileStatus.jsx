import React from "react";

class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            value: props.status,
        }

        this.onToggleEditModeHandler = this.onToggleEditModeHandler.bind(this);
        this.textInput = React.createRef();
    }

    onToggleEditModeHandler(e) {
        this.setState((state, props) => ({editMode: !state.editMode}));
        if (e.type === 'blur') this.props.updateStatus(this.state.value);
    }

    onChangeInput(e) {
        this.setState((state, props) => ({value: e.target.value}));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.editMode) this.textInput.current.focus();
        if (prevProps.status !== this.props.status) {
            this.setState((state, props) => ({value: this.props.status}));
        }
    }

    render() {

        let result = !this.state.editMode ? (
            <div>
                <span onDoubleClick={this.onToggleEditModeHandler}>{this.props.status || 'null'}</span>
            </div>
        ) : (
            <div>
                <input ref={this.textInput} value={this.state.value} 
                    onBlur={this.onToggleEditModeHandler} 
                    onChange={this.onChangeInput.bind(this)}   
                />
            </div>
        );
        
        return (
            <div>
                {result}
            </div>
        )
    }
}

export default ProfileStatus;