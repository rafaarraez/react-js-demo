import React, {Component} from 'react';
import styled from "styled-components";
import {Formik} from "formik";
import * as Yup from "yup";
import ProductForm from "../productForm/productForm";
import * as axios from "axios";

const EditProductContainer = styled.div`
  margin: 30px auto;
  width: 80%;
`;

class EditProduct extends Component {

    state = {
        formInitValues: {
            name: '',
            sku: '',
            size: '',
            sizeByBox: '',
            piecesByBox: '',
            characteristics: [],
            icon: null,
            banner: null,
            category: ''
        },
        submitState: '',
        message: ''
    };

    async componentDidMount() {
        const { match } = this.props;
        const { productId } = match.params;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`);

        this.setState(() => ({
            formInitValues: {
                ...response.data.data.product,
                icon: null,
                banner: null
            }
        }));
    }

    render() {
        return (
            <EditProductContainer>
                <Formik
                    enableReinitialize={true}
                    initialValues={this.state.formInitValues}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().trim().required('Debe ingresar el nombre del producto'),
                        sku: Yup.string().trim().required('Debe ingresar el SKU del producto'),
                        size: Yup.string().trim().required('Debe ingresar el tamaño del producto').matches(/^([0-9]+)x([0-9]+)$/, {
                            message: 'El tamaño debe tener el formato 00x00'
                        }),
                        sizeByBox: Yup.string().trim().required('Debe ingresar los m2 por caja del producto').matches(/^([0-9]+)$/, {
                            message: 'El tamaño solo puede contener numeros'
                        }),
                        piecesByBox: Yup.string().trim().required('Debe ingresar las piezas por caja del producto').matches(/^([0-9]+)$/, {
                            message: 'Las piezas por caja solo puede contener numeros'
                        }),
                        characteristics: Yup.array().required('Debe seleccionar al menos una caracteristica'),
                        icon: Yup.mixed(),
                        banner: Yup.mixed(),
                        category: Yup.string().trim().required('Debe seleccionar una categoria')
                    })}

                    onSubmit={async (values, formikAction) => {
                        window.scrollTo(0,0);
                        const { productId } = this.props.match.params;

                        formikAction.setSubmitting(true);

                        const formData = new FormData();

                        for (const entries of Object.entries(values)) {
                            formData.append(entries[0], entries[1]);
                        }


                        await axios.patch(`${process.env.REACT_APP_API_URL}/products/${productId}`, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        });

                        this.setState(() => ({
                            submitState: 'success',
                            message: 'El producto ha sido actualizado con exito'
                        }));

                        formikAction.setSubmitting(false);
                    }}
                    render={props => <ProductForm {...props} submitState={this.state.submitState} message={this.state.message}/>}
                />
            </EditProductContainer>
        );
    }
}

export default EditProduct;