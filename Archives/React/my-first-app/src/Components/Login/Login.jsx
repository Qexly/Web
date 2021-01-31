import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {Input} from './../common/FormsControls/FormsControls.jsx';
import {required, maxLengthCreator} from './../../Utils/Validators.js';

let maxLength10 = maxLengthCreator(10);

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmitHandler(formData) {
        console.log(formData);
    }   

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={this.onSubmitHandler.bind(this)}/>
            </div>
        )
    }
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder="Login" name="login" component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field type="password" placeholder="Password" name="password" component="input"/>
            </div>
            <div>
                <label><Field type="checkbox" component="input" name="rememberMe"/> remember me </label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login', //имя формы
})(LoginForm);

export default Login;