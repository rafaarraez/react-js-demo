import React, {Component} from 'react';
import styled from "styled-components";
import Slide from "./slide/slide";
import * as axios from "axios";
import SpinnerLoading from "../spinnerLoading/spinnerLoading";

class ImageSlider extends Component {
    state = {
        currentIndex: 0,
        translateValue: 0,
        sliders: [],
        loading: true
    };

    slideInterval;
    slideRef = React.createRef();

    async componentDidMount() {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/slider`);

        this.setState(() => ({
            sliders: response.data.data.sliders,
            loading: false
        }));
        if (response.data.data.sliders.length > 1) {
            this.slideInterval = setInterval(this.nextImg.bind(this), 7000)
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
            <div
                className={className}
                style={{
                    transform: `translateX(${this.state.translateValue}px`
                }}
                ref={this.slideRef}
            >
                {
                    sliders.length && sliders.map((slider, i) => (
                        <Slide key={slider.image} image={`${process.env.REACT_APP_API_PUBLIC}/${slider.image}`} text={slider.message}/>
                    ))
                }
                {
                    !!this.state.loading && <SpinnerLoading/>
                }
            </div>
        );
    }
}

const StyledImageSlider = styled(ImageSlider)`
  width: 100%;
  height: 100%;
  transition: transform 450ms ease-out;
  position: relative;
  white-space: nowrap;
`;

export default StyledImageSlider;