import { styled } from "styled-components";

export const Back = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #eeede7;
  border-radius: 0.6rem;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
