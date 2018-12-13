import styled from "styled-components";

const CloseButton = styled.div`
  position: absolute;
  right: 30px;
  top: 15px;
  cursor: pointer;
  font-size: 15px;
  opacity: 0.5;
  background: none;
  border: none;
  transition: opacity 0.2s ease;
  width: 30px;
  height: 30px;
`;

export default CloseButton;