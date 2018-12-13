import React, {Component} from 'react';
import styled from "styled-components";
import {Formik} from "formik";
import * as Yup from "yup";
import ProductForm from "../productForm/productForm";
import * as axios from "axios";
import PostForm from "../postForm/postForm";

const EditProductContainer = styled.div`
  margin: 30px auto;
  width: 80%;
`;

class EditPost extends Component {

    state = {
        formInitValues: {
            header: '',
            body: '',
            images: [],
            resume: '',
            featured: false
        },
        submitState: '',
        message: ''
    };

    async componentDidMount() {
        const { match } = this.props;
        const { postId } = match.params;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/${postId}`);
        const {post } = response.data.data;

        this.setState(() => ({
            formInitValues: {
                header: post.header,
                body: post.body,
                resume: post.resume,
                featured: post.featured
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
                        header: Yup.string().trim().required('Debe ingresar el titulo'),
                        body: Yup.string().trim().required('Debe ingresar el contenido del post'),
                        resume: Yup.string().trim().required('Debe ingresar el resumen del post'),
                        images: Yup.mixed().required('Debe ingresar al menos 1 imagen'),
                        featured: Yup.boolean()
                    })}

                    onSubmit={async (values, formikAction) => {
                        try {
                            console.log(values)
                            const { postId } = this.props.match.params;
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

                            formData.delete('images');

                            for (const image of values.images) {
                                formData.append('images', image)
                            }

                            const response = await axios.patch(`${process.env.REACT_APP_API_URL}/blog/${postId}`, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            });

                            this.setState(() => ({
                                submitState: 'success',
                                message: 'El post ha sido actualizado con exito'
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
            </EditProductContainer>
        );
    }
}

export default EditPost;