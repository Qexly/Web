import React from 'react';

class OuterClickExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }

        this.ref = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler.bind(this));
    }

    onClickOutsideHandler(e) {
        if (this.state.isOpen && !this.ref.current.contains(e.target)) {
            this.setState((state, props) => ({
                isOpen: false,
            }))
        }
    }

    onClickButtonHandler() {
        this.setState((state, props) => ({
            isOpen: !state.isOpen
        }))
    }

    render() {
        return (
            <div ref={this.ref}>
                <button onClick={this.onClickButtonHandler.bind(this)}>
                    Select an option
                </button>
                {
                    this.state.isOpen && (
                    <ul >
                        <li>option 1</li>
                        <li>option 2</li>
                        <li>option 3</li>
                    </ul>
                    )}
                <br />
                <button>
                    Load the option
                </button>
                <br />
                <button>
                    Remove the option
                </button>
            </div>
        )
    }
}

export default OuterClickExample;