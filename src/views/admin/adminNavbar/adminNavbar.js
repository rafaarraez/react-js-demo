import React from 'react';
import styled from "styled-components";
import NavItem from "../../../components/appbar/navMenu/navItem/navItem";
import {withRouter} from "react-router-dom";

const AdminNavbarContainer = styled.div`
  width: auto;
  height: auto;
  font-size: 0.90rem;
`;

const Navbar = styled.nav`
  width: 50%;
  height: auto;
  margin: 0 auto;
`;

const StyledUl = styled.ul`
      justify-content: space-around;
      align-items: center;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    `;

const AdminNavbar = ({ match }) => {
    const { url } = match;

    return (
        <AdminNavbarContainer>
            <Navbar>
                <StyledUl>
                    <NavItem link={`${url}/productos/catalogo`}>productos</NavItem>
                    <NavItem link={`${url}/posts/1`}>publicaciones</NavItem>
                    <NavItem link={`${url}/slider/1`}>slider</NavItem>
                </StyledUl>
            </Navbar>
        </AdminNavbarContainer>
    );
};

export default withRouter(AdminNavbar);
