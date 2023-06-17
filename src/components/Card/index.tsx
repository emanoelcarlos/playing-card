import styled from "styled-components";
import traactLogo from "../../assets/traactLogo.png";
import { SymbolCard } from "../../types/SymbolCard";
import { NumberOrFaceCard } from "../../types/NumberOrFaceCard";
import { ColorCard } from "../../types/ColorCard";

interface CardProps {
  symbol: SymbolCard;
  number: NumberOrFaceCard;
  color: ColorCard;
  isup: string;
}

const getSymbol = (symbol: SymbolCard) => {  
  switch (symbol) {
    case SymbolCard.CLUB:
      return "♣";
    case SymbolCard.DIAMONDS:
      return "♦";
    case SymbolCard.HEARTS:
      return "♥";
    case SymbolCard.SPADES:
      return "♠";
  }
};

const CardContainer = styled.div<Pick<CardProps, "isup">>`
  width: 24rem;
  height: 36rem;
  margin: 0rem 1rem;
  background-color: #eeede7;
  border-radius: 0.6rem;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isup === "true" ?  undefined : "rotateY(180deg)")};
`;

const Front = styled.div<Pick<CardProps, "symbol" | "number" | "color">>`
  &:before,
  &:after {
    /* content: attr(number) ${(props) => getSymbol(props.symbol)}; */
    content: attr(number) " ♥";
    position: absolute;
    width: 8px;
    text-align: center;
    font-size: 2rem;
    letter-spacing: -2px;
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

  backface-visibility: hidden;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #e5e5f7;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

function Card({
  symbol,
  number,
  color,
  isUp,
}: {
  symbol: SymbolCard;
  number: NumberOrFaceCard;
  color: ColorCard;
  isUp: boolean;
}) {
  return (
    <CardContainer isup={isUp.toString()}>
      <Front symbol={symbol} number={number} color={color}></Front>
      <Back>
        <img src={traactLogo} width="60%" />
      </Back>
    </CardContainer>
  );
}

export default Card;
