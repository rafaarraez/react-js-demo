import React, {Component} from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";
import appScreens from "../../../assets/images/Perspective-App-Screens-Mock-Up.png";
import Reviews from "./reviews/reviews";
import StyledFindUsMercadolibre from "./findUsMercadolibre/findUsMercadolibre";

class Testimonials extends Component {
    state = {
        reviews: [
            {
                text: 'Responsables los recomiendo al 100% gracias',
                username: 'estrellitas!'
            },
            {
                text: 'Lo recomiendo',
                username: 'FEJU5531818'
            },
            {
                text: 'TODO BIEN! 100% RECOMENDADO',
                username: 'SUPLINOVA'
            },
            {
                text: 'Lo recomiendo, buena atencion gracias',
                username: 'MARIWA'
            },
            {
                text: 'Excelente vendedor. Totalmente recomendado',
                username: 'KAROTECH'
            },
            {
                text: 'Excelente atencion',
                username: 'ALLU5047175'
            },
            {
                text: '100% recomendado',
                username: 'JOSEDO86'
            },
            {
                text: 'Entrega rapida sin problemas. 100% recomendado',
                username: 'YATORO'
            }
        ]
    };


    render() {
        const { className } = this.props;
        const { reviews } = this.state;

        return (
            <div className={className}>
                <StyledFindUsMercadolibre/>
                <div>
                    <ResponsiveImg src={appScreens}/>
                </div>
                <Reviews reviews={reviews}/>
            </div>
        );
    }
}

const StyledTestimonials = styled(Testimonials)`
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      flex-direction: row;
      height: 500px;
      flex-basis: 0;
      flex-grow: 1;
      position: relative;
      
      & > div {
        width: 50%;
        padding: 1rem;
        overflow: hidden;
        height: 100%;
      }
      
      & > div:first-child {
        height: 100px;
        padding: 0;
        width: auto;
      }
      
      @media (max-width: 700px) {
        flex-direction: column;
        
        & > div {
          width: 90%; 
        }
        
        & > div:first-child {
          display: none;
        }
      }
    `;

export default StyledTestimonials;
