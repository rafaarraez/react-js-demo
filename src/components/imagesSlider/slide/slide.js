import React from 'react';
import styled from "styled-components";

const Slide = ({ text, image }) => {
    const StyledDiv = styled.div`
      background-image: url("${image}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 60%;
      width: 100%;
      height: 100%;
      display: inline-block;
      position: relative;
      
      div {
        position: absolute;
        top: 50%;
        left: 10%;
        max-width: 400px;        
        transform: translatey(-50%);
      }
  
      p {
        color: white;
        border-top: 2px solid white;
        padding-top: 30px;
        padding-left: 40px;
        font-size: 1.50rem;
        white-space: normal;
      }
    `;

    return (
        <StyledDiv>
            <div>
                <p>{ text }</p>
            </div>
        </StyledDiv>
    );
};

export default Slide;