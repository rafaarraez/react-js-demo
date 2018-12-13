import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import cart from "../../assets/icons/CARRITO-SMALL.png";
import ResponsiveImg from "../responsiveImg/responsiveImg";
import minus from "../../assets/icons/minus-symbol.svg";
import Modal from "../modal/modal";
import closeIcon from "../../assets/icons/close.svg";
import {clearCart, removeFromCart} from "../../actions/cart.actions";
import {Formik} from "formik";
import * as Yup from 'yup';
import CartForm from "./cartForm/cartForm";
import * as axios from "axios";

const initValues = {
    name: '',
    lastname: '',
    cedula: '',
    rif: '',
    email: '',
    phone: '',
    address: '',
    amount: '',
    unidadDeMedida: '',
    socialReason: '',
    contribuyente: false
};

const CartContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 20px;
  border-radius: 6px 6px 0 0;
  background-color: #9E8382;
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 30px;
  cursor: pointer;
  
  img {
    width: 60px;
  }
  
  @media (max-width: 700px) {
    width: 150px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  transition: all 200ms;
  margin-bottom: 20px;
`;

const ProductsItem = styled.p`
  padding: 0.5rem 1.25rem 0.5rem 1rem;
  border-radius: 10px;
  background-color: #cccccc;
  position: relative;
`;

const Remove = styled.span`
  height: 10px;
  width: auto;
  position: absolute;
  right: 5px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.secondary};
  width: 90%;
  margin: 0 auto;
`;

class Cart extends React.Component {

    state = {
        showModal: false,
        submitState: '',
        message: ''
    };

    onShowModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }))
    };

    onRemoveFromCart = (productId) => {
        const { dispatch } = this.props;
        dispatch(removeFromCart(productId));
    };

    render() {
        return (
            <React.Fragment>
                <Modal
                    show={this.state.showModal}
                    closeCb={this.onShowModal}
                    ref={this.modalRef}
                >
                    <h1>Lista de cotización</h1>
                    <ProductsContainer>
                        {
                            !!this.props.cart.length && this.props.cart.map(product => (
                                <ProductsItem key={product.productId}>
                                    { product.productName }
                                    <Remove onClick={() => this.onRemoveFromCart(product.productId)}>
                                        <ResponsiveImg src={closeIcon}/>
                                    </Remove>
                                </ProductsItem>
                            ))
                        }
                        {
                            !this.props.cart.length && <p>No hay elementos en el carrito</p>
                        }
                    </ProductsContainer>

                    <FormContainer>
                        <Formik
                            initialValues={initValues}
                            validationSchema={Yup.object().shape({
                                name: Yup.string().trim().required('Debe ingresar su nombre').matches(/^[a-zA-Z\s]+$/, {
                                    message: 'El nombre solo puede contener letras y espacios'}),
                                lastname: Yup.string().trim().required('Debe ingresar su apellido').matches(/^[a-zA-Z\s]+$/, {
                                    message: 'El apellido solo puede contener letras y espacios'}),
                                cedula: Yup.string().trim().required("Debe ingresar su cedula").matches(/^([VEJPGvejpg])-([0-9]{7,9})$/, {
                                    message: 'La cedula debe tener el formato Y-XXXXXXX. Las letras aceptadas son V' +
                                        ' E J P G.'
                                }),
                                rif: Yup.string().trim().required("Debe ingresar su RIF").matches(/^([VEJPGvejpg])-([0-9]{7,9})-([0-9])$/, {
                                    message: 'El RIF debe tener el formato Y-XXXXXXX-X. Las letras aceptadas son V' +
                                        ' E J P G.'
                                }),
                                email: Yup.string().trim().required("Debe ingresar su correo").email('Debe ingresar' +
                                    ' un email valido'),
                                phone: Yup.string().trim().required('Debe ingresar su numero de telefono').matches(/^([0-9]{4})-([0-9]{7}$)/, {
                                    message: 'El numero de telefono debe tener el formato XXXX-XXXXXXX'
                                }),
                                address: Yup.string().trim().required("Debe ingresar su direccion"),
                                amount: Yup.string().trim().required("Debe ingresar la cantidad").matches(/^([0-9]+)$/, {
                                    message: 'Este campo solo acepta numeros'
                                }),
                                unidadDeMedida: Yup.string().trim().required("Debe ingresar una unidad de medida"),
                                socialReason: Yup.string().trim().required("Debe ingresar una razon social"),
                                contribuyente: Yup.boolean()
                            })}
                            onSubmit={async (values, formikActions) => {
                                try {
                                    this.setState(() => ({
                                        submitState: '',
                                        message: ''
                                    }));

                                    formikActions.setSubmitting(true);

                                    const response = await axios.post(`${process.env.REACT_APP_API_URL}/cart`, { user: {...values}, products: this.props.cart});

                                    this.setState(() => ({
                                        submitState: 'success',
                                        message: response.data.message
                                    }));

                                    formikActions.setSubmitting(false);
                                    formikActions.resetForm();
                                    this.props.dispatch(clearCart());
                                } catch (e) {
                                    formikActions.setSubmitting(false);
                                    this.setState(() => ({
                                        submitState: 'error',
                                        message: 'Ocurrio un error al enviar su presupuesto. Por favor, vuelva a' +
                                            ' intentarlo mas tarde'
                                    }))
                                }
                            }}
                            render={props => <CartForm {...props} submitState={this.state.submitState} message={this.state.message}/>}
                        />
                    </FormContainer>
                </Modal>
                <CartContainer onClick={this.onShowModal}>
                    <ResponsiveImg src={cart}/>
                    <ResponsiveImg src={minus}/>
                </CartContainer>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart.products
});

export default connect(mapStateToProps)(Cart);
