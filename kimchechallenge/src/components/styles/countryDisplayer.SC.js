import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 95%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 24rem);
  grid-gap: 1rem;
  justify-content: space-around;

  border: 1px solid var(--font-white);
  border-radius: 2rem;

  margin: 1rem 0;
`;
