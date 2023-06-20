import { styled } from "styled-components";
import { ColorCard } from "../../types/ColorCard";
import { SymbolCard } from "../../types/SymbolCard";
import { SuitCard } from "../../types/SuitCard";
import { NumberCard } from "../../types/NumberCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

interface CardProps {
  suit: SuitCard;
  symbol: string;
  number: NumberCard;
}

export const FrontContent = styled.div<
  Pick<CardProps, "suit" | "symbol" | "number">
>`
  color: ${(props) => ColorCard[props.suit]};
  box-sizing: border-box;
  padding: 3rem 2.6rem;
  position: relative;
  background: linear-gradient(
    45deg,
    #e4dbc3 5%,
    #ffffff 30%,
    #ffffff 70%,
    #e4dbc3 95%
  );

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

  ${CardSkeleton}
`;
