import { SymbolCard } from "../../types/SymbolCard";
import { NumberCard } from "../../types/NumberCard";
import { SuitCard } from "../../types/SuitCard";
import { Front } from "./Front";
import { CardContainer } from "./CardContainer";
import { CardCover } from "./CardCover";

function Card({
  suit,
  number,
}: {
  suit: SuitCard;
  number: NumberCard;
}) {
  return (
    <CardContainer>
      <Front suit={suit} symbol={SymbolCard[suit]} number={number}>
        <CardCover suit={suit} number={number}></CardCover>
      </Front>
    </CardContainer>
  );
}

export default Card;
