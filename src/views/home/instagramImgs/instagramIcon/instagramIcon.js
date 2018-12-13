import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg"
import icon from "../../../../assets/icons/instagram--white.png";

const IconContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  height: 50px;
`;


const InstagramIcon = () => {
    return (
        <IconContainer>
            <ResponsiveImg src={icon}/>
        </IconContainer>
    );
};

export default InstagramIcon;
