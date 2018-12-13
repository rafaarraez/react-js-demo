import React from "react";
import styled from "styled-components";
import InstagramIcon from "../instagramIcon/instagramIcon";
import StyledLink from "../../../../components/link/link";

const TextBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #111111;
  transition: all 300ms ease;
  
  :hover {
    opacity: 1;
    background-color: #11111199;
  }
  
  @media (max-width: 700px) {
    opacity: 1;
    background-color: #11111166;
  }
`;

const TextDescription = styled(StyledLink)`
  color: white;
  left: 5%;
  bottom: 10%;
  position: absolute;
  cursor: pointer;
  text-overflow: '... más.';
  overflow: hidden;
  white-space: nowrap;
  width: 90%;
  border-bottom: none;
  font-weight: 500;
  
  :hover {
    border-bottom: none;
    text-decoration: none;
  }
`;

const ImageDescription = ({ children, instagram, external, link }) => {
    return (
        <TextBackground>
            <TextDescription external={external} link={link}>{ children }</TextDescription>
            {
                !!instagram && <InstagramIcon/>
            }
        </TextBackground>
    )
};

export default ImageDescription;