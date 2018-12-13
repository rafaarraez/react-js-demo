import React, {Component} from 'react';
import styled from "styled-components";
import Pagination from "../../../components/pagination/pagination";
import * as axios from "axios";
import ProductCard from "../../catalogo/productsType/productCard/productCard";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/modal/modal";


const ProductsContainer = styled.div`
  width: 80%;
  margin: 30px auto;
`;

class Posts extends Component {

    state = {
        posts: [],
        totalPosts: 0,
        loading: true,
        modalOpen: false,
        modalMessage: ''
    };

    async componentDidMount() {
        const { page } = this.props.match.params;
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog?offset=${(page - 1) * 9}`);

        const { posts, totalPosts } = response.data.data;

        this.setState(() => ({
            posts,
            totalPosts,
            loading: false
        }))
    }

    async componentDidUpdate(prevProps) {
        const { page } = this.props.match.params;
        const { page: prevPage } = prevProps.match.params;

        if (page !== prevPage) {
            this.setState(() => ({
                loading: true,
                posts: []
            }));
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog?offset=${(page - 1) * 9}`);

            const { posts } = response.data.data;

            this.setState(() => ({
                posts,
                loading: false
            }));
        }
    }

    onChangePage = (page) => {
        const { history } = this.props;
        history.push('/admin/blog/' + page);
    };

    onDeleteProduct = async (id) => {
        try {
            this.setState(() => ({
                loading: true,
                posts: []
            }));

            await axios.delete(`${process.env.REACT_APP_API_URL}/blog/${id}`);

            const { page } = this.props.match.params;
            const responseGet = await axios.get(`${process.env.REACT_APP_API_URL}/blog?offset=${(page - 1) * 9}`);

            this.setState(() => ({
                modalOpen: true,
                loading: false,
                modalMessage: 'El post ha sido eliminado con exito',
                posts: responseGet.data.data.post
            }))

        } catch (e) {
            this.setState(() => ({
                loading: false,
                modalOpen: true,
                modalMessage: 'Ha ocurrido un error. Por favor, vuelva a intentarlo mas tarde'
            }))
        }
    };

    onEditProduct = (postId) => {
        const { history } = this.props;

        history.push('/admin/posts/editar/' + postId);
    };

    renderFn = (post, index) => (
        <ProductCard
            icon={process.env.REACT_APP_API_PUBLIC + '/' + post.images[0]}
            name={post.header}
            key={index}
        >
            <Button onClick={() => this.onEditProduct(post._id)}>editar</Button>
            <Button color={'#cc0000'} text={'#ffffff'} onClick={() => this.onDeleteProduct(post._id)}>borrar</Button>
        </ProductCard>
    );

    onAddProduct = () => {
        this.props.history.push('/admin/posts/agregar')
    };

    closeModal = () => {
        this.setState((prevState) => ({
            modalOpen: !prevState.modalOpen
        }))
    };

    render() {
        const { posts, totalPosts, loading } = this.state;

        return (
            <div>
                <Modal show={this.state.modalOpen} closeCb={this.closeModal}>
                    <h1>Producto eliminado</h1>
                    <p>{this.state.modalMessage}</p>
                </Modal>

                <h1>Posts <Button onClick={this.onAddProduct}>agregar post</Button></h1>
                <ProductsContainer>
                    <Pagination
                        items={posts}
                        totalItems={totalPosts}
                        loading={loading}
                        onChangePage={this.onChangePage}
                        renderFn={this.renderFn}
                    />
                </ProductsContainer>
            </div>
        );
    }
}

export default Posts;