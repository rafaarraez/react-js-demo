import React, {Component} from 'react';
import styled from "styled-components";
import * as axios from "axios";
import Pagination from "../../components/pagination/pagination";
import StyledBlogSlider from "./blogSlider/blogSlider";
import ImageSliderContainer from "../home/imageSliderContainer/imageSliderContainer";
import ResponsiveImg from "../../components/responsiveImg/responsiveImg";
import StyledLink from "../../components/link/link";

const BlogContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const Post = styled.div`
  grid-area: ${props => props.gridArea};
  width: 100%;
  height: 100%;
  position: relative;
`;

const PostInfo = styled.div`
  position: absolute;
  padding: 1rem;
  color: #ffffff;
  background-color: #00000077;
  bottom: 0;
  left: 0;
  width: 100%;
  
  a {
    font-size: 1.25rem;
    color: white;
  }
  
  p {
    font-size: 0.90rem;
  }
`;

class Blog extends Component {

    state = {
        posts: [],
        totalPosts: 0,
        loading: true
    };

    async componentDidMount() {
        const { page } = this.props.match.params;
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog?offset=${(page - 1) * 7}&limit=7`);

        const { posts, totalPosts } = response.data.data;

        this.setState(() => ({
            posts,
            totalPosts,
            loading: false
        }))
    }

    async componentDidUpdate(prevProps) {
        const { page } = this.props.match.params;
        const { page: prevPage } = prevProps.match.params;

        if (page !== prevPage) {
            this.setState(() => ({
                loading: true,
                posts: []
            }));
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog?offset=${(page - 1) * 7}&limit=7`);

            const { posts } = response.data.data;

            this.setState(() => ({
                posts,
                loading: false
            }));
        }
    }

    onChangePage = (page) => {
        const { history } = this.props;
        history.push('/blog/' + page);
    };

    onClickPost = (postId) => {
        const {history} = this.props;
        history.push(`/blog/post/${postId}`);
    };

    renderFn = (post, index) => (
        <Post
            image={process.env.REACT_APP_API_PUBLIC + '/' + post.images[0]}
            gridArea={'a' + (index + 1)}
            name={post.header}
            key={index}
            onClick={() => this.onClickPost(post._id)}
        >
            <ResponsiveImg src={process.env.REACT_APP_API_PUBLIC + '/' + post.images[0]}/>
            <PostInfo>
                <p><StyledLink link={`${process.env.REACT_APP_API_URL}/blog/${post._id}`}>{post.header}</StyledLink></p>
                <p>{post.resume}</p>
            </PostInfo>
        </Post>
    );

    render() {
        const { posts, totalPosts, loading } = this.state;

        return (
            <div>
                <ImageSliderContainer>
                    <StyledBlogSlider/>
                </ImageSliderContainer>

                <BlogContainer>
                    <Pagination
                        elementsPerPage={7}
                        items={posts}
                        totalItems={totalPosts}
                        loading={loading}
                        onChangePage={this.onChangePage}
                        renderFn={this.renderFn}
                        grid={true}
                    />
                </BlogContainer>
            </div>
        );
    }
}

export default Blog;