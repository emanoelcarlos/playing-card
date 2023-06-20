import { useEffect } from "react";

import FrontCard from "./components/FrontCard";
import { Back } from "./components/BackCard/Back";
import { CardSlot } from "./components/CardSlot/CardSlot";
import { useSetPlayingCards } from "./hooks/useSetPlayingCards";
import { CardBoard } from "./components/CardBoard/CardBoard";
import "./App.css";

function App() {
  const { actualCard, cardsOnDeck, cardsFliped, suffleSet, flipCard } =
    useSetPlayingCards();

  useEffect(() => {
    suffleSet();
  }, []);

  return (
    <CardBoard>
      {cardsOnDeck > 0 ? (
        <Back
          action={() => {
            flipCard();
          }}
        />
      ) : (
        <CardSlot
          text="All cards flipped. Click here to shuffle the deck"
          action={suffleSet}
        />
      )}

      {cardsFliped === 0 ? (
        <CardSlot text="Click in the deck to flip a card" />
      ) : (
        actualCard && (
          <FrontCard suit={actualCard?.suit} number={actualCard?.number}></FrontCard>
        )
      )}

      <div>{`${cardsOnDeck} ${
        cardsOnDeck === 1 ? "card" : "cards"
      } on Deck`}</div>

      <div>
        {`${cardsFliped} ${cardsFliped === 1 ? "card" : "cards"} flipped`}
      </div>
    </CardBoard>
  );
}

export default App;
