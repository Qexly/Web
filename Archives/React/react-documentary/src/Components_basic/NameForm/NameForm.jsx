import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    inputOnChangeHandler(e) {
        this.setState((state, props) => {
            console.log(this.state);
            return {
                value: e.target.value
            }
        });
    }

    sumbmitOnClickHandler() {
        alert(this.state.value + ' отправлено на сервер');
    }

    render() {
        return (
            <form>
                <label>
                    <input type='text' value={this.state.value} onChange={this.inputOnChangeHandler.bind(this)}/>
                </label>
                <input type='submit' onClick={this.sumbmitOnClickHandler.bind(this)}/>
            </form>
        )
    }
}

export default NameForm;