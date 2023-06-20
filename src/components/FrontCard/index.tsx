import { SymbolCard } from "../../types/SymbolCard";
import { NumberCard } from "../../types/NumberCard";
import { SuitCard } from "../../types/SuitCard";
import { CardCover } from "./Cover/CardCover";
import { memo } from "react";
import { FrontContent } from "./FrontContent";

function FrontCard({ suit, number }: { suit: SuitCard; number: NumberCard }) {
  return (
    <FrontContent suit={suit} symbol={SymbolCard[suit]} number={number}>
      <CardCover suit={suit} number={number}></CardCover>
    </FrontContent>
  );
}

export default memo(FrontCard);
