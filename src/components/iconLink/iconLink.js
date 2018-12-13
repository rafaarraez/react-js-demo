import React from 'react';
import ResponsiveImg from "../responsiveImg/responsiveImg";
import styled from "styled-components";
import StyledLink from "../link/link";

const IconLink = ({ icon, link, external }) => {

    const Link = styled(StyledLink)`
      height: 100%;
      width: 100%;
      border-bottom: none;
    
      :hover {
        border-bottom: none;
      }
    `;

    return (
        <Link
            link={link}
            external={external}
        >
            <ResponsiveImg src={icon}/>
        </Link>
    );
};

export default IconLink;
