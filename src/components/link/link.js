import React from "react";
import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";

const Link = ({ children, link, external, className }) => {
    if (external) {
        return (
            <a href={link} className={className} target={'__blank'}>{ children }</a>
        )
    } else {
        return (
            <RouterLink to={link} className={className}>{ children }</RouterLink>
        )
    }
};

const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.text};
  font-weight: 500;
  transition: all 300ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  border-bottom: 1px solid transparent;
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px 0 7px;
      
  :hover {
    color: ${props => props.theme.secondary};
    border-bottom: 1px solid ${props => props.theme.secondary};
  }
`;

export default StyledLink;