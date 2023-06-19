import { styled } from "styled-components";
import backCover from "../../assets/back-pattern-diagonal.png";

const BaseBack = ({
  action,
  className,
}: {
  action?: () => void;
  className?: string;
}) => {
  return <div className={className} onClick={action}></div>;
};
export const Back = styled(BaseBack)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 24rem;
  background-color: #eeede7;
  background-image: url(${backCover});
  border-radius: 0.6rem;
  -webkit-box-shadow: 20px 20px 8px 0px rgba(22, 26, 22, 0.9);
  -moz-box-shadow: 20px 20px 8px 0px rgba(22, 26, 22, 0.9);
  box-shadow: 20px 20px 8px 0px rgba(22, 26, 22, 0.9);

  &:hover {
    cursor: pointer;
  }
`;
