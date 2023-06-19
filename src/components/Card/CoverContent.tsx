import { styled } from "styled-components";

const BaseCoverContent = ({
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

export const CoverContent = styled(BaseCoverContent)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: ${(props) => (props.single ? "center" : "space-between")};
`;
