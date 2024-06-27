import styled from "styled-components";
import { LinkButton } from "../ui";

const Link = styled(LinkButton)`
  background: linear-gradient(45deg, var(--color-secondary), var(--color-support));
  color: var(--main-bg-color);
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(to right, var(--color-support), var(--color-secondary));
  };
`;

type GradientButtonProps = {
  children: React.ReactNode;
};

function GradientButton({ children }: GradientButtonProps) {
  return <Link href="#">{children}</Link>
}

export default GradientButton;

