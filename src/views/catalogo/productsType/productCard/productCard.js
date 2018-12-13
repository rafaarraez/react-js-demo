import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../../../../components/responsiveImg/responsiveImg";
import cart from "../../../../assets/icons/CARRITO-BOTON.png";

const ProductCardContainer = styled.div`
  width: 350px;
  height: auto;
  margin-top: 50px;
  border-radius: 6px;
  transition: all 200ms;
  
  :hover {
    box-shadow: 0 0 2px 2px #dddddd;
  }
  
  > img {
    height: 150px;
    width: 100%;
  }
`;

const ProductDescription = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  position: relative;
  
  p:first-child {
    font-size: 1.25rem;
    margin-bottom: 5px;
    cursor: pointer;
    
    :hover {
      color: ${props => props.theme.secondary};
    }
  }
`;

export const AddToCart = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 55px;
  height: 55px;
  transform: translateY(-50%);
  background-image: url("${cart}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: ${props => props.inCart ? 'grayscale(100%)' : 'none'};
  cursor: ${props => props.inCart ? 'not-allowed' : 'pointer'};
  
  :hover {
    opacity: ${props => props.inCart ? '1' : '0.8'};
  }
`;

const ProductFooter = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

const Powered = styled.span`
  position: relative;
  bottom: 1ex; 
  font-size: 80%;
`;

const ProductCard = ({ icon, children, name, size, onClick, cart, onAddToCart, inCart, showSize }) => {
    return (
        <ProductCardContainer>
            <ResponsiveImg src={icon}/>
            <ProductDescription>
                <p onClick={onClick}>{name}</p>
                {
                    !!showSize && <p>{size} m<Powered>2</Powered></p>
                }
                
                {
                    cart && <AddToCart onClick={onAddToCart} inCart={inCart}/>
                }

                <ProductFooter>
                    {
                        children
                    }
                </ProductFooter>
            </ProductDescription>
        </ProductCardContainer>
    );
};

export default ProductCard;
