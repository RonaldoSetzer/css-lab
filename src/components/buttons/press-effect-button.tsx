import styled from "styled-components";
import { LinkButton } from "../ui";

const Link = styled(LinkButton)`
  transition: transform 0.3s;

  &:active {
    transform: scale(0.90);
  };
`;

type PressEffectButtonProps = {
  children: React.ReactNode;
};

function PressEffectButton({ children }: PressEffectButtonProps) {
  return <Link href="#">{children}</Link>
}

export default PressEffectButton;

