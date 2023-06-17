import { useState } from "react";
import Card from "./components/Card";
import { styled } from "styled-components";
import { SymbolCard } from "./types/SymbolCard";
import { ColorCard } from "./types/ColorCard";
import { NumberOrFaceCard } from "./types/NumberOrFaceCard";
import "./App.css";

const CardBoard = styled.div`
  display: flex;
`;

const ButtonFlip = styled.button`
  height: 6rem;
  width: 16rem;
  border-radius: 0.6rem;
  background-color: #30623c;
  color: white;
`;

function App() {
  const [isUp, setIsUp] = useState(false);

  return (
    <CardBoard>
      <Card
        symbol={SymbolCard.CLUB}
        number={NumberOrFaceCard.SIX}
        color={ColorCard.CLUB}
        isUp={isUp}
      ></Card>
      <ButtonFlip
        onClick={() => {
          setIsUp((previous) => !previous);
        }}
      >
        Flip Cards
      </ButtonFlip>
    </CardBoard>
  );
}

export default App;
