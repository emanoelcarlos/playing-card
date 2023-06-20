import { styled } from "styled-components";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

const _CardSlot = ({
  text,
  action,
  className,
}: {
  text: string;
  action?: () => void;
  className?: string;
}) => {
  return (
    <div className={className} onClick={action}>
      {text}
    </div>
  );
};

export const CardSlot = styled(_CardSlot)`
  ${CardSkeleton}

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: dotted 4px #7eb88c;
  background-color: #ffffff14;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  color: #ffd100;
  padding: 1rem;
  cursor: ${(props) => (props.action ? "pointer" : "auto")};

  @media (max-width: 580px) {
    font-size: 1.2rem;
  }
`;
