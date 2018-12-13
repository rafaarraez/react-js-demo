import React from 'react';
import styled from "styled-components";
import Products from "./products/products";
import {Redirect, Route, Switch} from "react-router-dom";
import ProductsType from "./productsType/productsType";
import Product from "./product/product";

export const CatalogoContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 40px auto;
`;

const Catalogo = ({ match }) => {
    return (
        <Switch>
            <Route path={match.path} component={Products} exact/>
            <Route path={`${match.path}/producto/:productId`} component={Product}/>
            <Route path={`${match.path}/:category/:page`} component={ProductsType}/>
            <Redirect to={match.url}/>
        </Switch>
    );
};

export default Catalogo;
