import styled from "styled-components";

export const Container = styled.div`
  width: 30px;
  height: 30px;

  border: 10px solid #00000022;
  border-radius: 50%;
  // border-top-color: #1098f7;
  border-top-color: var(--other-color);

  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
