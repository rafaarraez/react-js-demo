import React from 'react';
import styled from "styled-components";
import {Formik, connect as withFormik} from "formik";
import {connect} from "react-redux";
import * as Yup from "yup";
import {loginFetch} from "../../actions/auth.actions";
import LoginForm from "./loginForm/loginForm";

const LoginContainer = styled.div`
  margin: 20px auto;
  width: 400px;
  height: auto;
`;

const formInitValues = {
    username: '',
    password: ''
};

class Login extends React.Component {

    render() {
        const { dispatch, error, message } = this.props;

        return (
            <LoginContainer>
                <h1>Iniciar Sesión</h1>
                <Formik
                    initialValues={formInitValues}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().trim().required('Debe ingresar su nombre'),
                        password: Yup.string().trim().required('Debe ingresar su contraseña')
                    })}
                    onSubmit={(values, formikActions) => {
                        formikActions.setSubmitting(true);
                        const { username, password } = values;

                        dispatch(loginFetch({ username, password }, formikActions.setSubmitting));
                    }}
                    render={props => <LoginForm {...props} submitState={error} message={message}/>}
                />
            </LoginContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.auth.error,
    message: state.auth.errorMsg,
    isLoading: state.auth.loading
});

export default withFormik(connect(mapStateToProps)(Login));
