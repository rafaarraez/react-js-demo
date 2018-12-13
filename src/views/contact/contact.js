import React from 'react';
import styled from "styled-components";
import {Formik} from "formik";
import * as Yup from "yup";
import ContactForm from "./contactForm/contactForm";
import axios from "axios";

const formInitValues = {
    name: '',
    lastname: '',
    phone: '',
    email: '',
    message: ''
};

const ContactContainer = styled.div`
  margin: 40px auto 0;
  padding: 0 2rem;
  width: 80%;
  
  @media (max-width: 700px) {
    width: 95%;
  }
`;


class Contact extends React.Component {
    state = {
        submitState: '',
        message: '',
    };

    render() {

        return (
            <ContactContainer>
                <h1>Contactanos</h1>
                <Formik
                    initialValues={formInitValues}
                    validationSchema={Yup.object().shape({
                        'name': Yup.string().trim().required('Debe ingresar su nombre').matches(/^[a-zA-Z\s]+$/, {
                            message: 'Su nombre solo puede contener letras y espacios'
                        }),
                        'lastname': Yup.string().trim().required('Debe ingresar su apellido').matches(/^[a-zA-Z\s]+$/, {
                            message: 'Su apellido solo puede contener letras y espacios'
                        }),
                        'phone': Yup.string().trim().required('Debe ingresar su numero de telefono').matches(/^([0-9]{4})-([0-9]{7}$)/, {
                            message: 'El numero de telefono debe tener el formato XXXX-XXXXXXX'
                        }),
                        'email': Yup.string().trim().required('Debe ingresar su email').email('Debe' +
                            ' ingresar un email con formato valido'),
                        'message': Yup.string().trim().required('Debe ingresar su mensaje')
                    })}
                    onSubmit={async (values, formikActions) => {
                        try {
                            formikActions.setSubmitting(true);
                            await axios.post(`${process.env.REACT_APP_API_URL}/messages`, values);
                            this.setState(() => ({
                                submitState: 'success',
                                message: 'Mensaje Enviado con exito'
                            }));
                            formikActions.resetForm();
                            formikActions.setSubmitting(false);
                        } catch (e) {
                            formikActions.setSubmitting(false);
                            if (e.response) {
                                this.setState(() => ({
                                    submitState: 'error',
                                    message: e.response.data.message
                                }))
                            } else {
                                this.setState(() => ({
                                    submitState: 'error',
                                    messsag: 'Ocurrio un error al enviar el mensaje. Por favor, vuelva a' +
                                        ' intentarlo mas tarde'
                                }))
                            }
                        }

                    }}
                    render={props => <ContactForm {...props} submitState={this.state.submitState} message={this.state.message}/>}
                />
            </ContactContainer>
        )
    }
}

export default Contact;
