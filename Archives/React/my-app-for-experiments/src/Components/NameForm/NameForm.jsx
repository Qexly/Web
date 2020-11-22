import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState((state, props) => {
            return {value: e.target.value};
        });
    }

    onSubmitHandler(e) {
        alert(this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
              <label>
                Имя:
                <input type="text" name="n" value={this.state.value} onChange={this.onChangeHandler} />
              </label>
              <input type="submit" value="Отправить" />
            </form>
          );
    }
}

export default NameForm;