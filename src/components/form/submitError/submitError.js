import styled from "styled-components";
import {lighten} from "polished";

const SubmitError = styled.div`
  background-color: ${props => props.error === 'error' ? lighten(0.55, '#cc0000') : lighten(0.55, '#00cc00')};
  color: ${props => props.error === 'error' ? '#cc0000' : '#00cc00'};
  border: 1px solid ${props => props.error === 'error' ? '#cc0000' : '#00cc00'};
  padding: 0.50rem 0.80rem;
  border-radius: 8px;
  height: auto;
  width: 100%;
  margin-bottom: 7px;
`;

export default SubmitError;