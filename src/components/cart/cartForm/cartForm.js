import React from 'react';
import {Form} from "formik";
import Input from "../../form/input/input";
import FormGroup from "../../form/formGroup/formGroup";
import Button from "../../Button/Button";
import SubmitError from "../../form/submitError/submitError";
import SpinnerLoading from "../../spinnerLoading/spinnerLoading";
import ValidationError from "../../form/validationError/validationError";
import isEmpty from "lodash.isempty";
import styled from "styled-components";

const FormFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const FlexContainer = styled.div`
  width: 50%;
`;

const CartForm = ({ className, errors, isSubmitting, dirty, touched, match, submitState, message }) => {
    return (
        <Form>
            {
                submitState && (<SubmitError error={submitState}>{ message }</SubmitError>)
            }

            {
                isSubmitting && <SpinnerLoading/>
            }
            <FormFlex>
                <FlexContainer>
                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'name'} invalid={errors.name && touched.name ? 1 : 0}
                            placeholder={'nombre'}
                        />
                        <ValidationError name={'name'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'lastname'} invalid={errors.lastname && touched.lastname ? 1 : 0}
                            placeholder={'apellido'}
                        />
                        <ValidationError name={'lastname'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'cedula'} invalid={errors.cedula && touched.cedula ? 1 : 0}
                            placeholder={'cedula'}
                        />
                        <ValidationError name={'cedula'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'rif'} invalid={errors.rif && touched.rif ? 1 : 0}
                            placeholder={'RIF'}
                        />
                        <ValidationError name={'rif'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'email'} invalid={errors.email && touched.email ? 1 : 0}
                            placeholder={'email'}
                        />
                        <ValidationError name={'email'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'phone'} invalid={errors.phone && touched.phone ? 1 : 0}
                            placeholder={'telefono'}
                        />
                        <ValidationError name={'phone'}/>
                    </FormGroup>
                </FlexContainer>

                <FlexContainer>
                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'address'} invalid={errors.address && touched.address ? 1 : 0}
                            placeholder={'direccion'}
                        />
                        <ValidationError name={'address'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'amount'} invalid={errors.amount && touched.amount ? 1 : 0}
                            placeholder={'cantidad'}
                        />
                        <ValidationError name={'amount'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'unidadDeMedida'} invalid={errors.unidadDeMedida && touched.unidadDeMedida ? 1 : 0}
                            placeholder={'unidad de medida'}
                        />
                        <ValidationError name={'unidadDeMedida'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'text'}
                            name={'socialReason'} invalid={errors.socialReason && touched.socialReason ? 1 : 0}
                            placeholder={'razon social'}
                        />
                        <ValidationError name={'socialReason'}/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={'checkbox'}
                            name={'contribuyente'} invalid={errors.contribuyente && touched.contribuyente ? 1 : 0} style={{width: 'auto', display: 'inline-block'}}
                        />{' '} <span style={{fontSize: '0.90rem'}}>Contribuyent Especial</span>
                        <ValidationError name={'contribuyente'}/>
                    </FormGroup>

                    <Button
                        type={'submit'}
                        disabled={isSubmitting || !isEmpty(errors) || !dirty}
                    >
                        enviar</Button>
                </FlexContainer>
            </FormFlex>
        </Form>
    );
};

export default CartForm;
