import React from 'react';
import styled from "styled-components";
import StyledLink from "../../link/link";
import {NavLink} from "react-router-dom";

const activeClassName = 'sideMenu-active';

const SideMenuContainer = styled.div.attrs({
    activeClassName
})`
  height: 100%;
  width: 60%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: ${props => props.open ? 0 : '-60%'};
  background-color: #ffffff;
  overflow-x: hidden;
  transition: all 300ms ease-in;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  a {
    width: auto;
    display: inline-block;
    padding: 0.5rem;
    border-bottom: none;
    
    :hover {
      border-bottom: none;
    }
  }
  
  a.${activeClassName} {
      color: ${props => props.theme.secondary};
    }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 8;
  width: 100vw;
  height: 100vh;
  background-color: #44444477;
  opacity: ${props => props.open ? 1 : 0}
  transition: all 300ms;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
`;

const SideMenu = ({ open, onClick }) => {
    return (
        <React.Fragment>
            <Overlay open={open} onClick={onClick}/>
            <SideMenuContainer open={open}>
                <StyledLink to={'/inicio'} as={NavLink} activeClassName={activeClassName} onClick={onClick}>inicio</StyledLink>
                <StyledLink to={'/blog'} as={NavLink} activeClassName={activeClassName} onClick={onClick}>blog</StyledLink>
                <StyledLink to={'/nosotros'} as={NavLink} activeClassName={activeClassName} onClick={onClick}>nosotros</StyledLink>
                <StyledLink to={'/catalogo'} as={NavLink} activeClassName={activeClassName} onClick={onClick}>catálogo</StyledLink>
                <StyledLink to={'/contacto'} as={NavLink} activeClassName={activeClassName} onClick={onClick}>contacto</StyledLink>
            </SideMenuContainer>
        </React.Fragment>
    );
};

export default SideMenu;
