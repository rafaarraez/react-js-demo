import React from 'react';
import styled from "styled-components";

const Title = () => {
    const StyledDiv = styled.div`
      font-size: 1.70rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 50px;
      border-bottom: 1px solid ${props => props.theme.secondary};
      align-self: center;
      width: 40%;
      text-align: right;
      height: 65px;
      
      p {
        width: 100%;
        color: ${props => props.theme.text};
      }
    `;

    return (
        <StyledDiv>
            <p>Juntos lo hacemos realidad</p>
        </StyledDiv>
    );
};

export default Title;
