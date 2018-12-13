import React from 'react';
import styled from "styled-components";
import logoImg from "../../../assets/logo/LOGO-GRIS.png";
import ResponsiveImg from "../../responsiveImg/responsiveImg";

const copyright = ({ className }) => {

    const Text = styled.p`
      font-size: 0.80rem;
    `;

    return (
        <div className={className}>
            <ResponsiveImg src={logoImg}/>
            <Text>Kavana revestimientos &copy;{'  '}|{'  '}2018</Text>
        </div>
    );
};

const Copyright = styled(copyright)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Copyright;
