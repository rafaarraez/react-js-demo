import React from 'react';
import styled from "styled-components";
import InstagramItem from "./instagramItem/instagramItem";
import FindUsFb from "./findUsFb/findUsFb";
import StyledLink from "../../../components/link/link";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";

const InstagramImgs = ({ publications }) => {
    const StyledDiv = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 15px;
    `;

    const ImgsContainer = styled.div`
      margin-top: 30px;
      width: 100%;
      height: auto;
      position: relative;
      
      &>p {
        text-align: center;
        color: ${props => props.theme.text};
        margin-bottom: 30px;
        font-size: 1.25rem;
      }
    `;

    return (
        <ImgsContainer>
            <p>
                Siguenos en Instagram!{' '}
                <StyledLink
                    external
                    link={'http://instagram.com/kavanarevest'}
                >
                    @kavanarevest
                </StyledLink>
            </p>
            <FindUsFb>
                <StyledLink
                    external
                    link={'https://www.facebook.com/kavanarevest/'}
                >
                    encuentranos en facebook
                </StyledLink>
            </FindUsFb>
            <StyledDiv>
                {
                    !!publications.length ? publications.map((publication) => (
                        <InstagramItem
                            image={publication.image}
                            description={publication.description}
                            instagram
                            external
                            link={publication.url}
                            key={publication.url}
                        />
                    )) :
                        <SpinnerLoading/>
                }
            </StyledDiv>
        </ImgsContainer>

    );
};

export default InstagramImgs;
