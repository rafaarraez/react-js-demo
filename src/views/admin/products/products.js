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

class Products extends Component {

    state = {
        products: [],
        totalProducts: 0,
        loading: true,
        modalOpen: false,
        modalMessage: ''
    };

    async componentDidMount() {
        const { category, page } = this.props.match.params;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/${category}?offset=${(page - 1) * 9}`);

        const { products, totalProducts } = response.data.data;

        this.setState(() => ({
            products,
            totalProducts,
            loading: false
        }))
    }

    async componentDidUpdate(prevProps) {
        const { page } = this.props.match.params;
        const { page: prevPage, category } = prevProps.match.params;

        if (page !== prevPage) {
            this.setState(() => ({
                loading: true,
                products: []
            }));
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/${category}?offset=${(page - 1) * 9}`);

            const { products } = response.data.data;

            this.setState(() => ({
                products,
                loading: false
            }));
        }
    }

    onChangePage = (page) => {
        const { history } = this.props;
        const { category } = this.props.match.params;
        history.push('/admin/productos/' + category + '/' + page);
    };

    onDeleteProduct = async (id) => {
        try {
            this.setState(() => ({
                loading: true,
                products: []
            }));
            const { category } = this.props.match.params;
            await axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`);

            const { page } = this.props.match.params;
            const responseGet = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/${category}?offset=${(page - 1) * 9}`);

            this.setState(() => ({
                modalOpen: true,
                loading: false,
                modalMessage: 'El producto ha sido eliminado con exito',
                products: responseGet.data.data.products
            }))

        } catch (e) {
            this.setState(() => ({
                loading: false,
                modalOpen: true,
                modalMessage: 'Ha ocurrido un error. Por favor, vuelva a intentarlo mas tarde'
            }))
        }
    };

    onEditProduct = (productId) => {
        const { history } = this.props;

        history.push('/admin/productos/editar/' + productId);
    };

    renderFn = (product, index) => (
        <ProductCard
            icon={process.env.REACT_APP_API_PUBLIC + '/' + product.icon}
            name={product.name}
            size={product.size}
            key={index}
            showSize
        >
            <Button onClick={() => this.onEditProduct(product._id)}>editar</Button>
            <Button color={'#cc0000'} text={'#ffffff'} onClick={() => this.onDeleteProduct(product._id)}>borrar</Button>
        </ProductCard>
    );

    onAddProduct = () => {
        this.props.history.push('/admin/productos/agregar')
    };

    closeModal = () => {
        this.setState((prevState) => ({
            modalOpen: !prevState.modalOpen
        }))
    };

    render() {
        const { products, totalProducts, loading } = this.state;
        const { category } = this.props.match.params;

        return (
            <div>
                <Modal show={this.state.modalOpen} closeCb={this.closeModal}>
                  <h1>Producto eliminado</h1>
                  <p>{this.state.modalMessage}</p>
                </Modal>

                <h1 style={{textTransform: 'capitalize'}}>{ category.split('-').join(' ') } <Button onClick={this.onAddProduct}>agregar producto</Button></h1>
                <ProductsContainer>
                    <Pagination
                        items={products}
                        totalItems={totalProducts}
                        loading={loading}
                        onChangePage={this.onChangePage}
                        renderFn={this.renderFn}
                    />
                </ProductsContainer>
            </div>
        );
    }
}

export default Products;