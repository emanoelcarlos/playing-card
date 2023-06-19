import { styled } from "styled-components";

const BaseCardSlot = ({
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

export const CardSlot = styled(BaseCardSlot)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 24rem;
  box-sizing: border-box;
  border: dotted 4px #7eb88c;
  border-radius: 0.6rem;
  background-color: #ffffff14;
  font-size: 1.4rem;
  text-align: center;
  color: #ffd100;
  padding: 1rem;
  cursor: ${props=> props.action ? 'pointer' : 'auto'}
`;
