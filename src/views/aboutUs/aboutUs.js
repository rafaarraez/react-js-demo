import React, {Component} from 'react';
import nosostrosImg from "../../assets/images/NOSOTROS.png";
import styled from "styled-components";
import Description from "./description/description";
import Modal from "../../components/modal/modal";
import Info from "./info/info";
import Vision from "./info/vision";
import Mision from "./info/mision";
import Valores from "./info/valores";

const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 4rem;
  margin-bottom: 20px;
  width: auto;
  position: absolute;
  top: 35%;
  transform: translateY(-65%);
  right: 40px;
  
  @media (max-width: 700px) {
    font-size: 2.5rem;
    right: 0;
  }
`;

const AboutsUsContainer = styled.div`
  width: 100%;
  height: 700px;
  background-image: url("${nosostrosImg}");
  background-repeat: no-repeat;
  background-size: cover;  
  position: relative;
  margin-top: 50px;
  background-position: center;
  
  :before {
    content: '';
    position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 32%, rgba(255,255,255,1) 69%);
  }
`;

class AboutUs extends Component {

    state = {
        showModal: false,
        option: ''
    };

    openModal = (option) => {
        this.setState(() => ({
            showModal: true,
            option
        }))
    };

    closeModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }))
    };

    render() {
        const { option } = this.state;

        return (
            <AboutsUsContainer>
                <Title>Kavana revestimientos</Title>
                <Description/>
                <Info openModal={this.openModal}/>
                <Modal
                    show={this.state.showModal}
                    modalColor={'#ff6c0f'}
                    crossColor={'white'}
                    textColor={'#ffffff'}
                    closeCb={this.closeModal}
                >
                    {
                        option === 'visión' && <Vision/>
                    }

                    {
                        option === 'misión' && <Mision/>
                    }

                    {
                        option === 'valores' && <Valores/>
                    }
                </Modal>
            </AboutsUsContainer>
        );
    }
}

export default AboutUs;
