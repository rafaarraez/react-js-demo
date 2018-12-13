import styled from "styled-components";

const ModalContent = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: ${props => props.modalColor || '#ffffff'};
  box-sizing: border-box;
  padding: 1.50rem 1.25rem;
  box-shadow: 0 1px 5px rgba(0,0,0,0.7);
  border-radius: 4px;
  width: 520px;
  color: ${props => props.textColor || props.theme.text};
  
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export default ModalContent;