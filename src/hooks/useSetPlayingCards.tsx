import { useState, useCallback } from "react";
import { setOfCards } from "../util/setOfCards";
import { PlayingCard } from "../types/PlayingCard";
import { randomGenerator } from "../util/randomGenerator";

export function useSetPlayingCards() {
  const [currentDeck, setCurrentDeck] = useState<PlayingCard[]>([]);
  const [actualCard, setActualCard] = useState<PlayingCard | null>(null);

  const suffleSet = useCallback(() => {
    const setOfCardsCopy = [...setOfCards];
    const suffledSetOfCards = setOfCardsCopy.sort(randomGenerator);

    setActualCard(null);
    setCurrentDeck((_) => suffledSetOfCards);
  }, []);

  const flipCard = useCallback(() => {
    const nextCard = currentDeck.length > 0 ? currentDeck.slice(-1)[0] : null;
    setActualCard(nextCard);
    setCurrentDeck((_) => currentDeck.slice(0, -1));
  }, [currentDeck]);

  return {
    actualCard: actualCard,
    cardsOnDeck: currentDeck.length,
    cardsFliped: setOfCards.length - currentDeck.length,
    suffleSet,
    flipCard,
  };
}
