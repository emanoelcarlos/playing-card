import { styled } from "styled-components";

const _CoverContent = ({
  // @ts-ignore
  single = false,
  children,
  className,
}: {
  single?: boolean;
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const CoverContent = styled(_CoverContent)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: ${(props) => (props.single ? "center" : "space-between")};
  height: 100%;
  align-items: center;

  > img {
    width: 100%;
  }
`;
