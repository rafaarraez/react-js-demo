import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  padding: 0.40rem 1rem;
  background-color: ${props => props.color || props.theme.secondary};
  color: ${props => props.text || props.theme.primary};
  border-radius: 20px;
  cursor: pointer;
  height: auto;
  border: none;
  font-weight: 500;
  
  :disabled {
    background-color: #777777;
    cursor: not-allowed;
  }
`;

export default Button;