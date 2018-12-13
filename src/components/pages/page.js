import styled from "styled-components";

const Page = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${props => props.theme.secondary};
  background-color: ${props => props.active ? props.theme.secondary : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : props.theme.secondary};
  text-align: center;
  padding: 5px;
  cursor: pointer;
`;

export default Page