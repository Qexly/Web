import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    tick() {
        this.setState((prevState, props) => {
            return {
                date: new Date(),
            }
        });
    }

    render() {
        return (
            <div>
                <h1> Привет, мир! </h1>
                <h2> Сейчас {this.state.date.toLocaleTimeString()} </h2>
            </div>
        )
    }
}

export default Clock;