import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import correoIcon from "../../../../assets/icons/correo-21.svg";
import cajaIcon from "../../../../assets/icons/caja-23.svg";

const ContactIcons = ({ className }) => {
    const IconContainer = styled.div`
      height: 200px;
      padding: 0.85rem;
    `;

    return (
        <div className={className}>
            <IconContainer>
                <ResponsiveImg src={correoIcon}/>
            </IconContainer>
            <IconContainer>
                <ResponsiveImg src={cajaIcon}/>
            </IconContainer>
        </div>
    );
};

const StyledContactIcons = styled(ContactIcons)`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export default StyledContactIcons;
