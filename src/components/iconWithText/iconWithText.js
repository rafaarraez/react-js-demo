import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../responsiveImg/responsiveImg";

const iconWithText = ({ className, children, icon}) => {
    const Description = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      font-size: 0.90rem;
    `;

    const Icon = styled(ResponsiveImg)`
      width: auto;
      height: ${props => props.iconSize || '50px'};
    `;

    return (
        <div className={className}>
            <Icon src={icon}/>
            <Description>
                { children }
            </Description>
        </div>
    );
};

const IconWithText = styled(iconWithText)`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  gap: 5px;
`;

export default IconWithText;
