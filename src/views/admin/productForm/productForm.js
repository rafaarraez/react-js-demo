import React from 'react';
import SubmitError from "../../../components/form/submitError/submitError";
import FormGroup from "../../../components/form/formGroup/formGroup";
import Input from "../../../components/form/input/input";
import ValidationError from "../../../components/form/validationError/validationError";
import Button from "../../../components/Button/Button";
import isEmpty from "lodash.isempty";
import {Field, Form} from "formik";
import Label from "../../../components/form/label/label";
import {characteristics} from "./characteristics";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  position: relative;
  height: 110px;
  user-select: none;
  display: inline-block;
  cursor: pointer;
  margin-right: 5px;
  
  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  
  img {
    border: 2px solid transparent;
  }
  
  & input:checked ~ img {
    border-color: ${props => props.theme.secondary};
  }
  
  &:hover img {
    border-color: ${props => props.theme.secondary};
  }
`;

function Checkbox(props) {
    return (
        <Field name={props.name}>
            {({ field, form }) => (
                <CheckboxContainer>
                    <input
                        type="checkbox"
                        {...props}
                        checked={field.value.includes(props.value)}
                        onChange={() => {
                            if (field.value.includes(props.value)) {
                                const nextValue = field.value.filter(
                                    value => value !== props.value
                                );
                                form.setFieldValue(props.name, nextValue);
                            } else {
                                const nextValue = field.value.concat(props.value);
                                form.setFieldValue(props.name, nextValue);
                            }
                        }}
                    />
                    <ResponsiveImg src={props.icon} style={{width: 'auto'}}/>
                </CheckboxContainer>
            )}
        </Field>
    );
}


const ProductForm = ({ className, errors, isSubmitting, dirty, touched, match, submitState, message, setFieldValue }) => {
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
                    <Label>Categoria del Producto</Label>
                    <Input
                        component={'select'}
                        name={'category'}
                        invalid={errors.category && touched.category ? 1 : 0}
                        >
                        <option value="ceramica">Ceramica</option>
                        <option value="porcelanato">Porcelanato</option>
                        <option value="piezas-de-baño">Piezas de baño</option>
                        <option value="muebles-de-baño">Muebles de Baño</option>
                        <option value="piedras-ornamentales">Piedras ornamentales</option>
                        <option value="mallas-y-decorados">Mallas y decorados</option>
                        <option value="griferias">Griferias</option>
                        <option value="accesorios">Accesorios</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Nombre del producto</Label>
                    <Input
                        type={'text'}
                        name={'name'} invalid={errors.name && touched.name ? 1 : 0}
                        placeholder={'nombre del producto'}
                    />
                    <ValidationError name={'name'}/>
                </FormGroup>

                <FormGroup>
                    <Label>Codigo del producto</Label>
                    <Input
                        type={'text'}
                        name={'sku'} invalid={errors.sku && touched.sku ? 1 : 0}
                        placeholder={'codigo del producto'}
                    />
                    <ValidationError name={'sku'}/>
                </FormGroup>

                <FormGroup>
                    <Label>Tamaño del producto</Label>
                    <Input
                        type={'text'}
                        name={'size'} invalid={errors.size && touched.size ? 1 : 0}
                        placeholder={'tamaño'}
                    />
                    <ValidationError name={'size'}/>
                </FormGroup>

                <FormGroup>
                    <Label>m2 por caja del producto</Label>
                    <Input
                        type={'text'}
                        name={'sizeByBox'} invalid={errors.sizeByBox && touched.sizeByBox ? 1 : 0}
                        placeholder={'m2 por caja'}
                    />
                    <ValidationError name={'sizeByBox'}/>
                </FormGroup>

                <FormGroup>
                    <Label>Piezas por caja</Label>
                    <Input
                        type={'text'}
                        name={'piecesByBox'} invalid={errors.piecesByBox && touched.piecesByBox ? 1 : 0}
                        placeholder={'piezas por caja'}
                    />
                    <ValidationError name={'piecesByBox'}/>
                </FormGroup>

                <FormGroup>
                    <Label>Icono del producto</Label>
                    <input
                        type={'file'}
                        name={'icon'}
                        onChange={(event) => setFieldValue('icon', event.currentTarget.files[0])}
                    />
                    <ValidationError name={'icon'}/>
                </FormGroup>

                <FormGroup>
                    <Label>Banner del producto</Label>
                    <input
                        type={'file'}
                        name={'banner'}
                        onChange={(event) => setFieldValue('banner', event.currentTarget.files[0])}
                    />
                    <ValidationError name={'banner'}/>
                </FormGroup>

                <FormGroup>
                    <Label>Seleccione las caracteristicas del producto</Label>
                    {
                        characteristics.map(characteristic => (
                            <Checkbox name={'characteristics'} value={characteristic.value} icon={characteristic.icon} key={characteristic.value}/>
                        ))
                    }
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

export default ProductForm;
