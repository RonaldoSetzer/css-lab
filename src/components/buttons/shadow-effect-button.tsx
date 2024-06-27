import styled from "styled-components";
import { LinkButton } from "../ui";

const Link = styled(LinkButton)`
  border: none;
  box-shadow: 0 4px #999;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px #666
  };
`;

type ShadowEffectButtonProps = {
  children: React.ReactNode;
};

function ShadowEffectButton({ children }: ShadowEffectButtonProps) {
  return <Link href="#">{children}</Link>
}

export default ShadowEffectButton;

