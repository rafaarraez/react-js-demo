import React from 'react';
import styled, {keyframes} from "styled-components";
import ReviewItem from "./reviewItem/reviewItem";

const Reviews = ({ reviews }) => {

    const scrollAnimation = keyframes`
      from {
        transform: translateY(0);
      }
      
      to {
        transform: translateY(-100%);
      }
    `;

    const StyledDiv = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow: hidden;
      height: 100%;
            
      & > div {
        animation: ${scrollAnimation} infinite 3s alternate linear;
      }
    `;


    return (
        <StyledDiv>
            {
                !!reviews.length && reviews.map((review, index) => (
                    <ReviewItem review={review.text} username={review.username} key={index}/>
                ))
            }
        </StyledDiv>
    );
};

export default Reviews;
