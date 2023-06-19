import { useState } from "react";
import { setOfCards } from "../util/setOfCards";
import { PlayingCard } from "../types/PlayingCard";

function randomComparator() {
  return Math.random() - 0.5;
}

export function useSetPlayingCards() {
  const [currentDeck, setCurrentDeck] = useState<PlayingCard[]>([]);
  const [actualCard, setActualCard] = useState<PlayingCard | null>(null);

  const suffleSet = () => {
    const setOfCardsCopy = [...setOfCards];
    const suffledSetOfCards = setOfCardsCopy.sort(randomComparator);

    setActualCard(null);
    setCurrentDeck((_) => suffledSetOfCards);
  };

  const flipCard = () => {
    const nextCard = currentDeck.length > 0 ? currentDeck.slice(-1)[0] : null;
    setActualCard(nextCard);
    setCurrentDeck((_) => currentDeck.slice(0, -1));
  };

  return {
    actualCard: actualCard,
    cardsOnDeck: currentDeck.length,
    cardsFliped: setOfCards.length - currentDeck.length,
    suffleSet,
    flipCard,
  };
}
