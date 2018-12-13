import styled from "styled-components";

const FindUsFb = styled.div`
  position: absolute;
  transform-origin: top left;
  transform: rotateZ(90deg) translateY(-100%);
  background-color: ${props => props.theme.secondary};
  border-radius: 8px 8px 0 0;
  padding: 0.75rem 1rem;
  font-weight: 500;
  left: 0;
  top: 25%;
  
  & > a {
    color: ${props => props.theme.primary};
    
    :hover {
        color: ${props => props.theme.primary};
        text-decoration: underline;
    }
  }
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export default FindUsFb;
