import React, {Component} from 'react';
import styled from "styled-components";
import * as axios from "axios";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import StyledLink from "../../../components/link/link";

const Slide = ({ text, image, link, resume}) => {
    const StyledDiv = styled.div`
      background-image: url("${image}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 60%;
      width: 100%;
      height: 100%;
      display: inline-block;
      position: relative;
      
      div {
        position: absolute;
        left: 0;
        bottom: 10%;
        width: 100%;
        background-color: #00000044;
        padding: 1rem;
        height: auto;
      }
  
      p a{
        color: white;
        font-size: 1.5rem;
        white-space: normal;
        border-bottom: 1px solid #ffffff;
        margin-bottom: 5px;
      }
      
      p {
        color: white;
      }
    `;

    return (
        <StyledDiv>
            <div>
                <p><StyledLink link={link}>{ text }</StyledLink></p>
                <p>{ resume }</p>
            </div>
        </StyledDiv>
    );
};

class BlogSlider extends Component {
    state = {
        currentIndex: 0,
        translateValue: 0,
        sliders: [],
        loading: true
    };

    slideInterval;
    slideRef = React.createRef();

    async componentDidMount() {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/featured`);

        const sliders = response.data.data.posts.map(post => ({
            id: post._id,
            header: post.header,
            image: post.images[0],
            resume: post.resume
        }));

        this.setState(() => ({
            sliders: sliders,
            loading: false
        }));
        if (sliders.length > 1) {
            this.slideInterval = setInterval(this.nextImg.bind(this), 4000)
        }
    }

    componentWillUnmount() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }


    nextImg = () => {
        const { currentIndex, sliders } = this.state;

        if (currentIndex < sliders.length - 1) {
            this.setState((prevState) => ({
                currentIndex: prevState.currentIndex + 1,
                translateValue: prevState.translateValue + -(this.slideWidth())
            }))

        } else {
            this.setState(() => ({
                currentIndex: 0,
                translateValue: 0
            }))
        }
    };

    slideWidth = () => {
        return this.slideRef.current.clientWidth;
    };

    render() {
        const { className } = this.props;
        const { sliders } = this.state;
        return (
            <React.Fragment>
                <h1 style={{color: '#ff802f', textAlign: 'center', marginBottom: '10px'}}>Articulos Destacados</h1>
                <div
                    className={className}
                    style={{
                        transform: `translateX(${this.state.translateValue}px`
                    }}
                    ref={this.slideRef}
                >
                    {
                        sliders.length && sliders.map((slider) => (
                            <Slide key={slider.image} image={`${process.env.REACT_APP_API_PUBLIC}/${slider.image}`} link={`/blog/post/${slider.id}`} text={slider.header} resume={slider.resume}/>
                        ))
                    }
                    {
                        !!this.state.loading && <SpinnerLoading/>
                    }
                </div>
            </React.Fragment>

        );
    }
}

const StyledBlogSlider = styled(BlogSlider)`
  width: 100%;
  height: 100%;
  transition: transform 450ms ease-out;
  position: relative;
  white-space: nowrap;
`;

export default StyledBlogSlider;