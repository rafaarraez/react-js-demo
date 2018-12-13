import React from 'react';
import styled from "styled-components";
import Copyright from "./copyright/copyright";
import SocialAccounts from "./socialAccounts/socialAccounts";
import Links from "./links/links";

const footer = ({ className }) => {
    return (
        <div className={className}>
            <Copyright/>
            <SocialAccounts/>
            <Links/>
        </div>
    );
};

const Footer = styled(footer)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 4rem 1.25rem;
  width: 100%;
  height: auto;
  background-color: #E2D9DA;
  
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export default Footer;
