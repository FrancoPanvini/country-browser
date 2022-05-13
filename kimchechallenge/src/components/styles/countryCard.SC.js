import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20rem;
  height: 7rem;
  padding: 1rem;
  margin: 1rem;

  background-color: var(--card-color);
  border: 1px solid var(--font-color);
  border-radius: 2rem;
  backdrop-filter: blur(4px);
  box-shadow: 2px 2px 20px 10px black;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  text-align: center;

  & h2 {
    font-size: 1.4rem;
    margin-bottom:0.1rem
  }

  & h3 {
    margin-bottom: 0.3rem;
  }

  & span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--other-color2);
  }
`;
