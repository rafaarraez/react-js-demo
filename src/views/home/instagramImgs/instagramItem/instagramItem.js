import React from 'react';
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import styled from "styled-components";
import ImageDescription from "../imageDescription/imageDescription";
import {withRouter} from "react-router-dom";

const InstagramItem = ({ image, description, instagram, external, link, history }) => {

    const StyledDiv = styled.div`
      width: 300px;
      height: 300px;
      position: relative;
      cursor: pointer;
    `;

    const onClick = () => {
        history.push(link)
    };

    return (
        <StyledDiv onClick={onClick}>
            <ResponsiveImg src={image}/>
            <ImageDescription instagram={instagram} external={external} link={link}>
                { description }
            </ImageDescription>
        </StyledDiv>
    );
};

export default withRouter(InstagramItem);
