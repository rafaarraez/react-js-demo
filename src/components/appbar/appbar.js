import React from 'react';
import styled from "styled-components";
import Branding from "./branding/branding";
import NavMenu from "./navMenu/navMenu";

const Appbar = () => {

    const StyledHeader = styled.header`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      background-color: ${props => props.theme.primary};
      margin-bottom: 20px;
      
      @media (max-width: 700px) {
        display: none;
      }
    `;

    return (
        <StyledHeader>
            <Branding/>
            <NavMenu/>
        </StyledHeader>
    );
};

export default Appbar;
