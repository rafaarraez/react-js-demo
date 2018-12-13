import styled from "styled-components";

const Submenu = styled.ul`
  position: absolute;
  left: 0;
  padding: 0;
  list-style: none;
  height: 1px; 
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  z-index: 1;
  transition: all 300ms ease-in;
`;

export default Submenu;
