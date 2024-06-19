import styled from "styled-components";

const Link = styled.a`
  background-color: var(--color-primary);
  color: var(--main-bg-color);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  margin: 4px 2px;
  transition: background-color 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: var(--color-secondary);
  };
`;

type HoverColorButtonProps = {
  children: React.ReactNode;
};

function HoverColorButton({ children }: HoverColorButtonProps) {
  return <Link href="#">{children}</Link>
}

export default HoverColorButton;
