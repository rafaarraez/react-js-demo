import styled from "styled-components";
import {lighten} from "polished";

const ServiceItem = styled.div`
  width: auto;
  height: auto;
  border-right: 1px solid ${props => lighten(0.7, props.theme.text)};
  text-align: center;
  padding: 1rem;
  margin-bottom: 20px;
  
  img {
    width: 200px;
    height: 200px;
  }
  
  @media (max-width: 700px) {
    border-left: 1px solid ${props => lighten(0.7, props.theme.text)};
    width: 40vw;
    
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default ServiceItem;