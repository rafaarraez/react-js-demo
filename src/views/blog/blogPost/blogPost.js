import React, {Component} from 'react';
import * as axios from "axios";
import isEmpty from "lodash.isempty";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import {format} from "date-fns";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";

const Container = styled.div`
  width: 80%;
  margin: 40px auto;
`;

const BodyContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const Date = styled.span`
  font-weight: 500;
`;

const Description = styled.span`
  font-size: 0.85rem;
`;

const ImagesContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  gap: 40px;
  margin-top: 30px;
  border-top: 2px solid ${props => props.theme.secondary};
`;

class BlogPost extends Component {

    state = {
        post: {}
    };

    async componentDidMount() {
        const { postId } = this.props.match.params;
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/${postId}`);

        this.setState(() => ({
            post: response.data.data.post
        }))
    }


    render() {
        const { post } = this.state;
        if (isEmpty(post)) {
            return (<SpinnerLoading/>)
        } else {
            return (
                <Container>
                    <h1 style={{fontSize: '3.5rem'}}>{post.header}</h1>
                    <p><Date>{format(post.createdAt, 'D-M-YYYY')}</Date> <Description>{post.resume}</Description></p>
                    <BodyContainer>

                        <ReactMarkdown source={post.body}/>
                    </BodyContainer>

                    <ImagesContainer>
                        {
                            post.images.map(image => (
                                <ResponsiveImg src={`${process.env.REACT_APP_API_PUBLIC}/${image}`}/>
                            ))
                        }
                    </ImagesContainer>
                </Container>
            );
        }

    }
}

export default BlogPost;