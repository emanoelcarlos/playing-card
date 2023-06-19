import { NumberCard } from "./NumberCard";
import { SuitCard } from "./SuitCard";

export interface PlayingCard {
  suit: SuitCard;
  number: NumberCard;
}
