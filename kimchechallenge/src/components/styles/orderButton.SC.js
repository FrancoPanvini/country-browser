import styled from "styled-components";

export const Button = styled.button`
  margin: 0.4rem 1rem 1rem 1rem;
  padding: 0.25rem 1rem;

  color: var(--font-white);
  font-size: 1.5rem;
  font-weight: 400;

  background-color: transparent;
  border: 2px solid var(--font-white);
  border-radius: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.active === true &&
    `
  background-color: var(--other-color);
  color:var(--background-color);
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  box-shadow: 2px 2px 20px 10px black;
  &:hover {
    cursor: context-menu;
  }
  `};

  transition: 0.3s;
`;
