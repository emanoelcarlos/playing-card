import { styled } from "styled-components";

export const CardBoard = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: min-content min-content;
  column-gap: 2rem;
  row-gap: 1rem;
  justify-items: center;
  align-items: start;
  box-sizing: content-box;

  > div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }

  > div:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }

  > div:nth-child(3) {
    grid-area: 2 / 1 / 3 / 2;
    font-size: 1.1rem;
    color: white;
  }

  > div:nth-child(4) {
    grid-area: 2 / 2 / 3 / 3;
    font-size: 1.1rem;
    color: white;
  }

  @media (max-width: 580px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
    row-gap: 1rem;

    > div:nth-child(1){ grid-area: 1 / 1 / 2 / 2; }
    > div:nth-child(3){ grid-area: 2 / 1 / 3 / 2; }
    > div:nth-child(2){ grid-area: 3 / 1 / 4 / 2; }
    > div:nth-child(4){ grid-area: 4 / 1 / 5 / 2; }
  }
`;
