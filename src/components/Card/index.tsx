import styled from "styled-components";
import traactLogo from "../../assets/traactLogo.png";
import jCover from "../../assets/j-cover.png";
import qCover from "../../assets/q-cover.png";
import kCover from "../../assets/k-cover.png";
import { SymbolCard } from "../../types/SymbolCard";
import { NumberCard } from "../../types/NumberCard";
import { ColorCard } from "../../types/ColorCard";
import { SuitCard } from "../../types/SuitCard";
import { CoverContainer } from "./CoverContainer";
import { CoverContent } from "./CoverContent";
import { Front } from "./Front";
import { Back } from "./Back";
import { CardContainer } from "./CardContainer";

export interface CardProps {
  suit: SuitCard;
  symbol: string;
  number: NumberCard;
  isup: string;
}

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
      <Back>
        <img src={traactLogo} width="60%" />
      </Back>
      <Front suit={suit} symbol={SymbolCard[suit]} number={number}>
        <CardCover suit={suit} number={number}></CardCover>
      </Front>
    </CardContainer>
  );
}

function CardCover({ suit, number }: { suit: SuitCard; number: NumberCard }) {
  if (NumberCard.ACE === number) {
    return (
      <CoverContainer>
        <CoverContent single>
          <span style={{ fontSize: "12rem" }}>{SymbolCard[suit]}</span>
        </CoverContent>
      </CoverContainer>
    );
  }

  if (NumberCard.JACK === number) {
    return (
      <CoverContent>
        <img src={jCover} />
      </CoverContent>
    );
  }

  if (NumberCard.QUEEN === number) {
    return (
      <CoverContent>
        <img src={qCover} />
      </CoverContent>
    );
  }

  if (NumberCard.KING === number) {
    return (
      <CoverContent>
        <img src={kCover} />
      </CoverContent>
    );
  }

  let coverFactor = 2;
  let quantityLateralColumn = Math.floor(parseInt(number) / coverFactor);

  if ([NumberCard.TWO].includes(number)) {
    coverFactor = 3;
    quantityLateralColumn = Math.floor(parseInt(number) / coverFactor);
  }

  if ([NumberCard.THREE].includes(number)) {
    coverFactor = 4;
    quantityLateralColumn = Math.floor(parseInt(number) / coverFactor);
  }

  if ([NumberCard.EIGHT, NumberCard.NINE, NumberCard.TEN].includes(number)) {
    coverFactor = 3;
    quantityLateralColumn = Math.ceil(parseInt(number) / coverFactor);
  }

  const quantityCentralColumn = parseInt(number) - 2 * quantityLateralColumn;

  return (
    <CoverContainer>
      <CoverContent>
        {Array<JSX.Element>(quantityLateralColumn).fill(
          <span>{SymbolCard[suit]}</span>
        )}
      </CoverContent>

      <CoverContent single={quantityCentralColumn === 1}>
        {Array<JSX.Element>(quantityCentralColumn).fill(
          <span>{SymbolCard[suit]}</span>
        )}
      </CoverContent>

      <CoverContent>
        {Array<JSX.Element>(quantityLateralColumn).fill(
          <span>{SymbolCard[suit]}</span>
        )}
      </CoverContent>
    </CoverContainer>
  );
}

export default Card;
