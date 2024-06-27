import styled from "styled-components";
import { LinkButton } from "../ui";

const Link = styled(LinkButton)`
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  color: transparent;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: transparent;
    color: var(--color-primary);
  };
`;

type AnimatedTextButtonProps = {
  children: React.ReactNode;
};

function AnimatedTextButton({ children }: AnimatedTextButtonProps) {
  return (
    <Link href="#">{children}</Link>
  );
}
export default AnimatedTextButton

