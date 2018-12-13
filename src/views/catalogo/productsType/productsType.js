import React, {Component} from 'react';
import styled from "styled-components";
import Filters from "./filters/filters";
import ProductCard from "./productCard/productCard";
import * as axios from "axios";
import Pagination from "../../../components/pagination/pagination";
import Filter from "./filters/filter/filter";
import {addToCart} from "../../../actions/cart.actions";
import {connect} from "react-redux";
import {CatalogoContainer} from "../catalogo";

const ProductsContainer = styled.div`
  width: 90%;
  
  h1 {
    text-transform: capitalize;
  }
`;

class ProductsType extends Component {

    state = {
        products: [],
        totalProducts: 0,
        loading: true,
        modalOpen: false,
        modalMessage: ''
    };

    async componentDidMount() {
        const { category,page } = this.props.match.params;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/${category}?offset=${(page -1 ) * 9}`);

        const { products, totalProducts } = response.data.data;

        this.setState(() => ({
            products,
            totalProducts,
            loading: false
        }))
    }

    async componentDidUpdate(prevProps) {
        const { page, category } = this.props.match.params;
        const { page: prevPage, category: prevCategory } = prevProps.match.params;

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
        } else if (category !== prevCategory) {
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

        history.push(`/catalogo/${category}/` + page);
    };

    onClickProduct = (id) => {
        const { history } = this.props;

        history.push(`/catalogo/producto/${id}`);
    };

    onAddCart = (productId, productName) => {
        const { dispatch } = this.props;
        dispatch(addToCart({productId, productName}));
    };

    inCart = (productId) => {
        const {cart} = this.props;
        return cart.findIndex(product => product.productId === productId) > -1;
    };

    renderFn = (product, index) => (
        <ProductCard
            icon={process.env.REACT_APP_API_PUBLIC + '/' + product.icon}
            name={product.name}
            size={product.size}
            key={index}
            onClick={() => this.onClickProduct(product._id)}
            onAddToCart={() => this.onAddCart(product._id, product.name)}
            cart={true}
            inCart={this.inCart(product._id)}
        >
        </ProductCard>
    );

    render() {
        const { products, totalProducts, loading } = this.state;
        const { category } = this.props.match.params;

        return (
            <CatalogoContainer>
                <ProductsContainer>
                    <h1 style={{textTransform: 'capitalize'}}>{ category.split('-').join(' ') }</h1>
                    <Pagination
                        items={products}
                        totalItems={totalProducts}
                        loading={loading}
                        onChangePage={this.onChangePage}
                        renderFn={this.renderFn}
                    />
                </ProductsContainer>
            </CatalogoContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.products
});

export default connect(mapStateToProps)(ProductsType);