import { styled } from "styled-components";
import { ColorCard } from "../../types/ColorCard";
import { CardProps } from ".";
import { SymbolCard } from "../../types/SymbolCard";

export const Front = styled.div<Pick<CardProps, "suit" | "symbol" | "number">>`
  color: ${(props) => ColorCard[props.suit]};
  height: 100%;
  width: 100%;
  font-size: 4rem;
  line-height: 4rem;
  box-sizing: border-box;
  padding: 4rem 2rem;
  font-family: "Lora", serif;
  position: absolute;
  background-color: #e8e8e8;
  border-radius: 0.6rem;
  backface-visibility: hidden;

  &:before,
  &:after {
    content: ${(props) => `'${props.number} ${SymbolCard[props.suit]} '`};
    position: absolute;
    width: 1rem;
    text-align: center;
    font-size: 2.2rem;
    line-height: 2.2rem;
  }

  &:before {
    top: 1rem;
    left: 1rem;
  }

  &:after {
    bottom: 1rem;
    right: 1rem;
    transform: rotate(180deg);
  }
`;