import { css } from "styled-components";

export const CardSkeleton = css`
  width: 16rem;
  height: 24rem;
  border-radius: 0.6rem;
  font-size: 4rem;
  line-height: 4rem;

  @media (max-width: 580px) {
    width: 12rem;
    height: 18rem;
    font-size: 2rem;
    line-height: 2rem;

    &:before,
    &:after {
      width: 1rem;
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }
`;
