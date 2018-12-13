import React from 'react';
import SubmitError from "../../../components/form/submitError/submitError";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import FormGroup from "../../../components/form/formGroup/formGroup";
import Label from "../../../components/form/label/label";
import Input from "../../../components/form/input/input";
import ValidationError from "../../../components/form/validationError/validationError";
import {characteristics} from "../productForm/characteristics";
import Button from "../../../components/Button/Button";
import isEmpty from "lodash.isempty";
import {Form} from "formik";

const SliderForm = ({ className, errors, isSubmitting, dirty, touched, match, submitState, message, setFieldValue }) => {
    return (
        <div>
            <Form className={className}>
                {
                    submitState && (<SubmitError error={submitState}>{ message }</SubmitError>)
                }

                {
                    isSubmitting && <SpinnerLoading/>
                }

                <FormGroup>
                    <Label>Mensaje</Label>
                    <Input
                        type={'text'}
                        name={'message'} invalid={errors.message && touched.message ? 1 : 0}
                        placeholder={'Mensaje a mostrar con la imagen'}
                    />
                    <ValidationError name={'message'}/>
                </FormGroup>

                <FormGroup>
                    <Label>Imagen</Label>
                    <input
                        type={'file'}
                        name={'image'}
                        onChange={(event) => setFieldValue('image', event.currentTarget.files[0])}
                    />
                    <ValidationError name={'image'}/>
                </FormGroup>


                <Button
                    type={'submit'}
                    disabled={isSubmitting || !isEmpty(errors) || !dirty}
                >
                    agregar</Button>
            </Form>
        </div>
    );
};

export default SliderForm;
