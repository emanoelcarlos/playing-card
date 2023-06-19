import { styled } from "styled-components";
import { ColorCard } from "../../types/ColorCard";
import { SymbolCard } from "../../types/SymbolCard";
import { SuitCard } from "../../types/SuitCard";
import { NumberCard } from "../../types/NumberCard";

interface CardProps {
  suit: SuitCard;
  symbol: string;
  number: NumberCard;
}

export const Front = styled.div<Pick<CardProps, "suit" | "symbol" | "number">>`
  color: ${(props) => ColorCard[props.suit]};
  width: 16rem;
  height: 24rem;
  font-size: 4rem;
  line-height: 4rem;
  box-sizing: border-box;
  padding: 3rem 2rem;
  position: absolute;
  background: rgb(233, 227, 211);
  background: linear-gradient(
    45deg,
    rgba(233, 227, 211, 1) 0%,
    rgba(253, 253, 251, 1) 50%,
    rgba(233, 227, 211, 1) 100%
  );
  border-radius: 0.6rem;

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
