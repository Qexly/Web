import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: false,
            count: 0
        } 
    }

    inputOnChangeHandlers(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState((state, props) => ({
            [name]: value,
        }))
    }

    render() {
        return (
            <form>
                <label>
                    Пойдут
                    <input type='checkbox' name='isGoing' checked={this.state.checked} onChange={this.inputOnChangeHandlers.bind(this)} />
                </label>
                <br />
                <label>
                    Количество гостей
                    <input type='number' name='count' value={this.state.count} onChange={this.inputOnChangeHandlers.bind(this)}/>
                </label>
            </form>
        )
    }
}

export default Reservation;