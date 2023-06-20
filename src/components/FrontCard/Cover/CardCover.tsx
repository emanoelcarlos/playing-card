import { NumberCard } from "../../../types/NumberCard";
import { SuitCard } from "../../../types/SuitCard";
import { SymbolCard } from "../../../types/SymbolCard";
import { CoverContainer } from "./CoverContainer";
import { CoverContent } from "./CoverContent";
import jCover from "../../../assets/j-cover.png";
import qCover from "../../../assets/q-cover.png";
import kCover from "../../../assets/k-cover.png";

export const CardCover = ({ suit, number }: { suit: SuitCard; number: NumberCard }) => {
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
        <CoverContent single>
          <img src={jCover} />
        </CoverContent>
      );
    }
  
    if (NumberCard.QUEEN === number) {
      return (
        <CoverContent single>
          <img src={qCover} />
        </CoverContent>
      );
    }
  
    if (NumberCard.KING === number) {
      return (
        <CoverContent single>
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
  