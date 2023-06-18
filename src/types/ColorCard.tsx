import { SuitCard } from "./SuitCard";

enum COLORS {
  RED = "red",
  BLACK = "black",
}

export const ColorCard = {
  [SuitCard.CLUB]: COLORS.BLACK,
  [SuitCard.HEARTS]: COLORS.RED,
  [SuitCard.SPADES]: COLORS.BLACK,
  [SuitCard.DIAMONDS]: COLORS.RED,
}