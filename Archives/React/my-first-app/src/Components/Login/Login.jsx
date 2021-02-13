import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from './../common/FormsControls/FormsControls.jsx';
import { required, maxLengthCreator } from './../../Utils/Validators.js';
import { login } from './../../Redux/auth-reducer.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let maxLength30 = maxLengthCreator(30);

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmitHandler(formData) {
        this.props.login(formData.email, formData.password, formData.rememberMe);
    }   

    render() {
        
        if (this.props.isAuth) return <Redirect to={"/profile"} />

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
                <Field type="text" placeholder="Login" name="email" component={Input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field type="password" placeholder="Password" name="password" component="input"/>
            </div>
            <div>
                <label><Field type="checkbox" component="input" name="rememberMe"/> remember me </label>
            </div>
            <div>
                {
                    props.error ? <span>{props.error}<br/></span> : null
                }
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login', //имя формы
})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login);