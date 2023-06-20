import { styled } from "styled-components";
import backCover from "../../assets/back-pattern-diagonal.png";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

const _Back = ({
  action,
  className,
}: {
  action?: () => void;
  className?: string;
}) => {
  return <div className={className} onClick={action}></div>;
};
export const Back = styled(_Back)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeede7;
  background-image: url(${backCover});
  -webkit-box-shadow: 20px 20px 8px 0px rgba(22, 26, 22, 0.9);
  -moz-box-shadow: 20px 20px 8px 0px rgba(22, 26, 22, 0.9);
  box-shadow: 20px 20px 8px 0px rgba(22, 26, 22, 0.9);

  &:hover {
    cursor: pointer;
  }

  ${CardSkeleton}
`;
