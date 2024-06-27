import styled from "styled-components";
import { LinkButton } from "../ui";

const Link = styled(LinkButton)`
  transition: background-color 0.3s;

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
