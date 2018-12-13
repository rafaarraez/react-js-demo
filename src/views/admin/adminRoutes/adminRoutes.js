import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Products from "../products/products";
import ProductCatalogo from "../../catalogo/products/products";
import AddProduct from "../addProduct/addProduct";
import EditProduct from "../editProduct/editProduct";
import AddSlider from "../addSlider/addSlider";
import Sliders from "../sliders/sliders";
import Posts from "../posts/posts";
import AddPost from "../addPost/addPost";
import EditPost from "../editPost/editPost";

const AdminRoutes = ({ match }) => {
    const { path, url } = match;

    return (
        <Switch>
            <Route path={`${path}/productos/agregar`} component={AddProduct}/>
            <Route path={`${path}/productos/catalogo`} component={ProductCatalogo} exact/>
            <Route path={`${path}/productos/editar/:productId`} component={EditProduct}/>
            <Route path={`${path}/productos/catalogo/:category/:page`} component={Products}/>
            <Route path={`${path}/posts/agregar`} component={AddPost}/>
            <Route path={`${path}/posts/editar/:postId`} component={EditPost}/>
            <Route path={`${path}/posts/:page`} component={Posts}/>
            <Route path={`${path}/slider/agregar`} component={AddSlider}/>
            <Route path={`${path}/slider/:page`} component={Sliders}/>
            <Redirect to={`${url}/productos/catalogo`}/>
        </Switch>
    );
};

export default withRouter(AdminRoutes);
