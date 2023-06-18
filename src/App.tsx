import { useState } from "react";
import Card from "./components/Card";
import { styled } from "styled-components";
import { NumberCard } from "./types/NumberCard";
import { SuitCard } from "./types/SuitCard";
import "./App.css";

const CardBoard = styled.div`
  display: flex;
`;

const ButtonFlip = styled.button`
  height: 4rem;
  width: 12rem;
  border-radius: 0.6rem;
  background-color: #30623c;
  color: white;
`;

function App() {
  const [isUp, setIsUp] = useState(false);

  return (
    <CardBoard>
      <Card
        suit={SuitCard.DIAMONDS}
        number={NumberCard.TEN}
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
