import styled from "styled-components";

const Filter = styled.select`
  border-radius: 6px;
  color: ${props => props.theme.text};
  background-color: #d6d6d6;
  padding: 0.2rem 1rem;
  width: 20%;
`;

export default Filter;