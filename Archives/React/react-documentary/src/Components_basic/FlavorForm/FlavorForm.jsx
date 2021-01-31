import React from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
        }
    }

    selectOnClickHandler(e) {
        this.setState((state, props) => {
            if (state.value.includes(e.target.value)) {
                state.value.splice(state.value.indexOf(e.target.value), 1);
                return {
                    value: [...state.value],
                }
            }
            return {
                value: [...state.value, e.target.value],
            }
        })
    }

    buttonOnClickHandler(e) {

        this.setState((state, props) => {
            return {
                value: [],
            }
        })

        e.preventDefault();

    } 

    render() {
        return (
            <form>
                <select multiple={true} value={this.state.value} onClick={this.selectOnClickHandler.bind(this)}>
                    <option value="grapefruit">Грейпфрут</option>
                    <option value="lime">Лайм</option>
                    <option value="apple">Яблочко</option>
                    <option value="orange">Мандарин</option>
                    <option value="mango">Манго</option>
                    <option value="coconut">Кокос</option>
                </select>
                <button onClick={this.buttonOnClickHandler.bind(this)}> Сброс </button>
            </form>
        )
    }
}

export default FlavorForm;