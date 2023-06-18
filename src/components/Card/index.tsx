import styled from "styled-components";
import traactLogo from "../../assets/traactLogo.png";
import { SymbolCard } from "../../types/SymbolCard";
import { NumberCard } from "../../types/NumberCard";
import { ColorCard } from "../../types/ColorCard";
import { SuitCard } from "../../types/SuitCard";

interface CardProps {
  suit: SuitCard;
  symbol: string;
  number: NumberCard;
  isup: string;
}

const CardContainer = styled.div<Pick<CardProps, "isup">>`
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

const Front = styled.div<Pick<CardProps, "suit" | "symbol" | "number">>`
  color: ${(props) => ColorCard[props.suit]};
  height: 100%;
  font-size: 4rem;
  line-height: 4rem;
  box-sizing: border-box;
  padding: 4rem 2rem;
  font-family: "Lora", serif;
  
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
  backface-visibility: hidden;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #eeede7;
  border-radius: 0.6rem;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

function Card({
  suit,
  number,
  isUp,
}: {
  suit: SuitCard;
  number: NumberCard;
  isUp: boolean;
}) {
  return (
    <CardContainer isup={isUp.toString()}>
      <Front suit={suit} symbol={SymbolCard[suit]} number={number}>
        <CardCover suit={suit} number={number}></CardCover>
      </Front>
      <Back>
        <img src={traactLogo} width="60%" />
      </Back>
    </CardContainer>
  );
}

function CardCover({ suit, number }: { suit: SuitCard; number: NumberCard }) {
  if ([NumberCard.TWO, NumberCard.THREE].includes(number)) {
    return <div></div>;
  }

  let coverFactor = 2;
  let quantityLateralColumn = Math.floor(parseInt(number) / coverFactor);

  if ([NumberCard.EIGHT, NumberCard.NINE, NumberCard.TEN].includes(number)) {
    coverFactor = 3;
    quantityLateralColumn = Math.ceil(parseInt(number) / coverFactor);
  }

  const quantityCentralColumn = parseInt(number) - 2 * quantityLateralColumn;

  return (
    <div
      style={{
        display: "flex",
        gap: "1.6rem",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        {Array(quantityLateralColumn).fill(<span>{SymbolCard[suit]}</span>)}
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: quantityCentralColumn === 1 ? "center" : "CENTER",
        }}
      >
        {Array(quantityCentralColumn).fill(<span>{SymbolCard[suit]}</span>)}
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        {Array(quantityLateralColumn).fill(<span>{SymbolCard[suit]}</span>)}
      </div>
    </div>
  );
}

export default Card;
