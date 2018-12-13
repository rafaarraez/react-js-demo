import React, {Component} from 'react';
import ImageSliderContainer from "./imageSliderContainer/imageSliderContainer";
import StyledImageSlider from "../../components/imagesSlider/imageSlider";
import InstagramImgs from "./instagramImgs/instagramsImgs";
import Testimonials from "./testimonials/testimonials";
import StyledContact from "./contact/contact";
import Services from "./services/services";
import axios from "axios";

class Home extends Component {

    state = {
        publications: []
    };

    async componentDidMount() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/instagram`);
            this.setState(() => ({
                publications: response.data.images
            }))
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        return (
            <React.Fragment>
                <ImageSliderContainer>
                    <StyledImageSlider/>
                </ImageSliderContainer>
                <Services/>
                <InstagramImgs publications={this.state.publications}/>
                <Testimonials/>
                <StyledContact/>
            </React.Fragment>
        );
    }
}

export default Home;