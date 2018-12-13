import React, {Component} from 'react';
import styled from "styled-components";
import * as Yup from "yup";
import * as axios from "axios";
import {Formik} from "formik";
import SliderForm from "../sliderForm/sliderForm";

const initialValues = {
    message: '',
    image: null
};

const AddProductContainer = styled.div`
  margin: 30px auto;
  width: 80%;
`;


class AddSlider extends Component {

    state = {
        submitState: '',
        message: ''
    }

    render() {
        return (
            <AddProductContainer>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object().shape({
                        message: Yup.string().trim(),
                        image: Yup.mixed().required('Debe ingresar el banner del producto'),
                    })}
                    onSubmit={async (values, formikAction) => {
                        try {
                            this.setState(() => ({
                                submitState: '',
                                message: ''
                            }));
                            window.scrollTo(0,0);

                            formikAction.setSubmitting(true);

                            const formData = new FormData();

                            for (const entries of Object.entries(values)) {
                                formData.append(entries[0], entries[1]);
                            }

                            const response = await axios.post(`${process.env.REACT_APP_API_URL}/slider`, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            });

                            this.setState(() => ({
                                submitState: 'success',
                                message: response.data.message
                            }));

                            formikAction.resetForm();
                            formikAction.setSubmitting(false);
                        } catch (e) {
                            this.setState(() => ({
                                submitState: 'error',
                                message: 'Se ha producido un error. Por favor vuelva a intertarlo mas tarde'
                            }));

                            formikAction.setSubmitting(false);
                        }

                    }}
                    render={props => <SliderForm {...props} submitState={this.state.submitState} message={this.state.message}/>}
                />
            </AddProductContainer>
        );
    }
}

export default AddSlider;