import styled from "styled-components";

export const Button = styled.button`
  margin: 1rem;
  padding: 0.25rem 1rem;

  font-size: 1.5rem;
  ${props => props.active === true && `background-color: blue;`};
`;
