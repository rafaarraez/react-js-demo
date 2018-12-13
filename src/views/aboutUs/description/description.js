import React from 'react';
import styled from "styled-components";

const description = ({ className }) => {
    return (
        <div className={className}>
            <p>
                Somos una joven empresa fundada en el 2012, dedicada a la comercialización mayor y detal de Revestimientos como Porcelanatos, Mármoles, Granitos, Piedras Naturales, Cerámicas, Mallas Decorativas para todas las áreas de su hogar y de productos para sus baños tales como Muebles, Piezas Sanitarias, Accesorios, Griferías de la más alta calidad; orientados a la atención personalizada nuestros clientes. Atendemos, asesoramos y acompañamos proyectos de gran escala.
            </p>
        </div>
    );
};

const Description = styled(description)`
  position: absolute;
  right: 40px;
  top: 55%;
  transform: translateY(-45%);
  text-align: justify;
  font-size: 0.85rem;
  width: 600px;
  padding: 1.50rem 0.80rem;
  border-bottom: 1px solid ${props => props.theme.secondary};
  
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export default Description;
