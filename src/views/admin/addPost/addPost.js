import React, {Component} from 'react';
import styled from "styled-components";
import * as Yup from "yup";
import * as axios from "axios";
import {Formik} from "formik";
import PostForm from "../postForm/postForm";

const initialValues = {
    header: '',
    body: '',
    images: [],
    resume: '',
    featured: false
};

const AddProductContainer = styled.div`
  margin: 30px auto;
  width: 80%;
`;


class AddPost extends Component {

    state = {
        submitState: '',
        message: ''
    };

    render() {
        return (
            <AddProductContainer>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object().shape({
                        header: Yup.string().trim().required('Debe ingresar el titulo'),
                        body: Yup.string().trim().required('Debe ingresar el contenido del post'),
                        resume: Yup.string().trim().required('Debe ingresar el resumen del post'),
                        images: Yup.mixed().required('Debe ingresar al menos 1 imagen'),
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
                            console.log(formData.get('images'))

                            formData.delete('images');

                            for (const image of values.images) {
                                formData.append('images', image)
                            }
                            console.log(formData.get('images'))

                            const response = await axios.post(`${process.env.REACT_APP_API_URL}/blog`, formData, {
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
                    render={props => <PostForm {...props} submitState={this.state.submitState} message={this.state.message}/>}
                />
            </AddProductContainer>
        );
    }
}

export default AddPost;