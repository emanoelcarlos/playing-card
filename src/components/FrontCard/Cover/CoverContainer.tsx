import { styled } from "styled-components";

const _CoverContainer = ({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const CoverContainer = styled(_CoverContainer)`
  display: flex;
  gap: 1.6rem;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
