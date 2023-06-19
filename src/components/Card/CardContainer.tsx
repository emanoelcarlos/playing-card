import { styled } from "styled-components";
import { CardProps } from ".";

export const CardContainer = styled.div<Pick<CardProps, "isup">>`
  width: 18rem;
  height: 28rem;
  margin: 0rem 1rem;
  border-radius: 0.6rem;
  background-color: #eeede7;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.isup === "true" ? undefined : "rotateY(180deg)"};
`;
