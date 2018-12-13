import React from 'react';
import SubmitError from "../../../components/form/submitError/submitError";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import FormGroup from "../../../components/form/formGroup/formGroup";
import Label from "../../../components/form/label/label";
import Input from "../../../components/form/input/input";
import ValidationError from "../../../components/form/validationError/validationError";
import Button from "../../../components/Button/Button";
import isEmpty from "lodash.isempty";
import {Form} from "formik";
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

const PostForm = ({ className, errors, isSubmitting, dirty, touched, match, submitState, message, setFieldValue, values }) => {
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
                    <Label>Titulo</Label>
                    <Input
                        type={'text'}
                        name={'header'} invalid={errors.header && touched.header ? 1 : 0}
                        placeholder={'Mensaje a mostrar con la imagen'}
                    />
                    <ValidationError name={'header'}/>
                </FormGroup>

                <FormGroup>
                    <SimpleMDE
                        value={values.body}
                        onChange={(value) => setFieldValue('body', value)}/>
                </FormGroup>

                <FormGroup>
                    <Label>Resumen</Label>
                    <Input
                        component={'textarea'}
                        name={'resume'} invalid={errors.resume && touched.resume ? 1 : 0}
                        placeholder={'Resumen del post'}
                    />
                    <ValidationError name={'resume'}/>
                </FormGroup>

                <FormGroup>
                    <Label>Imagenes</Label>
                    <input
                        type={'file'}
                        name={'images'}
                        multiple
                        onChange={(event) => setFieldValue('images', event.currentTarget.files)}
                    />
                    <ValidationError name={'image'}/>
                </FormGroup>

                <FormGroup>
                    <Input
                        type={'checkbox'}
                        name={'featured'} invalid={errors.featured && touched.featured ? 1 : 0} style={{width: 'auto', display: 'inline-block'}}
                    />{' '} <span style={{fontSize: '0.90rem'}}>Post destacado</span>
                    <ValidationError name={'featured'}/>
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

export default PostForm;
