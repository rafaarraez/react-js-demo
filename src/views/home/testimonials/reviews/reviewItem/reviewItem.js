import React from 'react';
import styled from "styled-components";
import profileIcon from "../../../../../assets/icons/profile.png";
import ResponsiveImg from "../../../../../components/responsiveImg/responsiveImg";

const ReviewItem = ({ review, username }) => {
    const StyledDiv = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
      width: 100%;
      height: auto;
    `;

    const StyledTextReview = styled.p`
      font-weight: 500;
    `;

    const StyledUsername = styled.p`
      font-size: 0.90rem;
      height: 30px;
      display: flex;
      flex-direction: row;
      text-transform: uppercase;
      align-items: center;
      margin-bottom: 5px;
      
      img {
        width: auto;
      }
    `;

    return (
        <StyledDiv>
            <StyledTextReview>"{ review }"</StyledTextReview>
            <StyledUsername>
                <ResponsiveImg src={profileIcon}/>
                { username }
            </StyledUsername>
        </StyledDiv>
    );
};

export default ReviewItem;
