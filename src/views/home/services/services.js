import React from 'react';
import styled from "styled-components";
import ServicesTitle from "./servicesTitle/servicesTitle";
import CardGrid from "../../../components/cardGrid/cardGrid";
import {servicesItems} from "./servicesItems";
import ServiceItem from "./serviceItem/serviceItem";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  
  @media (max-width: 700px) {
    flex-direction: column;
  })
`;

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesTitle/>
            <CardGrid>
                {
                    !!servicesItems.length && servicesItems.map((service) => (
                        <ServiceItem key={service.name}>
                            <ResponsiveImg src={service.icon}/>
                            <p>{ service.name }</p>
                            <p>{ service.description }</p>
                        </ServiceItem>
                    ))
                }
            </CardGrid>
        </ServicesContainer>
    );
};

export default Services;
