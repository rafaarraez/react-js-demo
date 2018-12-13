import React from 'react';
import styled from "styled-components";
import Overlay from "./overlay/overlay";
import CloseButton from "./closeButton/closeButton";
import ModalContent from "./modalContent/modalContent";
import closeIconWhite from "../../assets/icons/close-white.svg";
import closeIcon from "../../assets/icons/close.svg";
import ResponsiveImg from "../responsiveImg/responsiveImg";


const modal = ({ className, children, closeCb, modalColor, crossColor, textColor }) => {
    return (
        <div className={className}>
            <Overlay onClick={closeCb}/>
            <ModalContent modalColor={modalColor} textColor={textColor}>
                {children}

                <CloseButton onClick={closeCb}>
                    <ResponsiveImg src={crossColor === 'white' ? closeIconWhite : closeIcon}/>
                </CloseButton>
            </ModalContent>
        </div>
    );
};

const Modal = styled(modal)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  display: ${props => props.show ? 'block' : 'none'};
`;

export default Modal;
