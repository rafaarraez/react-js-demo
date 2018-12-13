import React from 'react';
import styled from "styled-components";
import NavItem from "./navItem/navItem";
import CatalogoSubmenu from "./catalogoSubmenu/catalogoSubmenu";
import Button from "../../Button/Button";
import {connect} from "react-redux";
import {logoutPut} from "../../../actions/auth.actions";

const NavMenu = ({ children, dispatch, isLoggedIn }) => {
    const StyledNav = styled.nav`
      width: 50%;
      height: auto;
      margin: 0 auto;
    `;

    const StyledUl = styled.ul`
      justify-content: space-between;
      align-items: center;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    `;

    const onLogout = () => {
        dispatch(logoutPut());
    };

    return (
        <StyledNav>
            <StyledUl>
                {children}
                <NavItem link={'/inicio'}>Inicio</NavItem>
                <NavItem link={'/blog/1'}>Blog</NavItem>
                <NavItem link={'/nosotros'}>Nosotros</NavItem>
                <NavItem link={'/catalogo'} submenu={<CatalogoSubmenu/>}>Catálogo</NavItem>
                <NavItem link={'/contacto'}>Contacto</NavItem>
                {
                    isLoggedIn && (
                        <React.Fragment>
                            <NavItem link={'/admin'}>
                                panel de control
                            </NavItem>
                            <Button onClick={onLogout}>
                                cerrar sesión
                            </Button>
                        </React.Fragment>
                    )
                }
            </StyledUl>
        </StyledNav>
    );
};

const mapStateToPros = (state) => ({
    isLoggedIn: state.auth.isAuthenticated
});

export default connect(mapStateToPros)(NavMenu);
