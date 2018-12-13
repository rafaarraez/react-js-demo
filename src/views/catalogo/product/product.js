import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {addToCart} from "../../../actions/cart.actions";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";
import {AddToCart} from "../productsType/productCard/productCard";

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("${props => props.banner}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProductContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const ProductDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ProductIcon = styled.div`
  height: auto;
  width: 50%;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  p:first-child {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const Powered = styled.span`
  position: relative;
  bottom: 1ex; 
  font-size: 80%;
`;

const CharacteristicsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Characteristic = styled.div`
  height: 110px;
  width: auto;
`;

const AddToCartProduct = styled(AddToCart)`
  position: static;
  top: auto;
  right: auto;
  width: 55px;
  height: 55px;
  transform: translateY(0);
`;

class Product extends React.Component {

    state = {
        product: {},
        loading: false
    };

    async componentDidMount() {
        this.setState(() => ({
            loading: true
        }));
        const { productId } = this.props.match.params;
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`);

        this.setState(() => ({
            product: response.data.data.product,
            loading: false
        }))
    }

    addToCart = (productId, productName) => {
        const { dispatch } = this.props;
        dispatch(addToCart({productId, productName}));
    };

    inCart = (productId) => {
        const {cart} = this.props;
        return cart.findIndex(product => product.productId === productId) > -1;
    };

    render() {
        const {product, loading} = this.state;
        if (loading || isEmpty(product)) {
            return (
                <div>
                    <SpinnerLoading/>
                </div>
            )
        } else {
            return (
                <div>
                    <Banner banner={`${process.env.REACT_APP_API_PUBLIC}/${product.banner}`}/>
                    <ProductContainer>
                        <ProductDescription>
                            <ProductIcon>
                                <ResponsiveImg src={`${process.env.REACT_APP_API_PUBLIC}/${product.icon}`}/>
                            </ProductIcon>
                            <ProductDetails>
                                <p>{product.name}</p>
                                <p>{product.sku}</p>
                                <p>{product.size} m<Powered>2</Powered></p>
                                <p>PZAS/CAJA {product.piecesByBox}</p>
                                <p>m<Powered>2</Powered>/caja {product.sizeByBox}</p>
                                <AddToCartProduct onClick={() => this.addToCart(product._id, product.name)} inCart={() => this.inCart(product._id)}/>
                            </ProductDetails>
                        </ProductDescription>

                        <CharacteristicsContainer>
                            {
                                product.characteristics.map(characteristic => (
                                    <Characteristic key={characteristic}>
                                        <ResponsiveImg src={`${process.env.REACT_APP_API_PUBLIC}/productIcon/${characteristic}`}/>
                                    </Characteristic>
                                ))
                            }
                        </CharacteristicsContainer>
                    </ProductContainer>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.products
});

export default connect(mapStateToProps)(Product);
