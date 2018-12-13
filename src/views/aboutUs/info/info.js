import React from 'react';
import styled from "styled-components";
import StyledLink from "../../../components/link/link";

const info = ({ className, openModal }) => {

    const StyledParagraph = styled(StyledLink)`
      color: ${props => props.theme.secondary};
      padding-right: 10px;
    `;

    const onOpenModal = (event) => {
        const option = event.currentTarget.innerText;

        openModal(option);
    };

    return (
        <div className={className}>
            <StyledParagraph as={'p'} onClick={onOpenModal}>
                visión
            </StyledParagraph>

            <StyledParagraph as={'p'} onClick={onOpenModal}>
                misión
            </StyledParagraph>

            <StyledParagraph as={'p'} onClick={onOpenModal}>
                valores
            </StyledParagraph>
        </div>
    );
};

const Info = styled(info)`
  position: absolute;
  right: 40px;
  top: 70%;
  transform: translateY(-30%);
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export default Info;
