import styled from "styled-components";
import { LinkButton } from "../ui";

const Link = styled(LinkButton)`
  position: relative;
  border: none;
  box-shadow: 0 6px var(--color-support);
  transition: all 0.3s ease;

  &:active {
    top: 6px;
    box-shadow: 0 0 var(--color-secondary);
  }
`;

type PressEffect3dButtonProps = {
  children: React.ReactNode;
};

function PressEffect3dButton({ children }: PressEffect3dButtonProps) {
  return <Link href="#">{children}</Link>
}

export default PressEffect3dButton;

