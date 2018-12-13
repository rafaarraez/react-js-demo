import React from 'react';
import {Form} from "formik";
import FormGroup from "../../../components/form/formGroup/formGroup";
import Input from "../../../components/form/input/input";
import ValidationError from "../../../components/form/validationError/validationError";
import isEmpty from "lodash.isempty";
import Button from "../../../components/Button/Button";
import SubmitError from "../../../components/form/submitError/submitError";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";

const LoginForm = ({ className, errors, isSubmitting, dirty, touched, match, submitState, message, isLoading }) => {
    return (
        <Form>
            {
                submitState && (<SubmitError error={submitState}>{ message }</SubmitError>)
            }

            {
                isSubmitting && <SpinnerLoading/>
            }

            <FormGroup>
                <Input
                    type={'text'}
                    name={'username'} invalid={errors.username && touched.username ? 1 : 0}
                    placeholder={'nombre de usuario'}
                />
                <ValidationError name={'username'}/>
            </FormGroup>

            <FormGroup>
                <Input
                    type={'password'}
                    name={'password'} invalid={errors.password && touched.password ? 1 : 0}
                    placeholder={'contraseña'}
                />
                <ValidationError name={'password'}/>
            </FormGroup>

            <Button
                type={'submit'}
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
            >
                {isLoading ? <SpinnerLoading/> : 'Iniciar Sesion'}</Button>
        </Form>
    );
};

export default LoginForm;
