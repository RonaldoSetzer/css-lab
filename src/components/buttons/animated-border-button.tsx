import styled from "styled-components";
import { LinkButton } from "../ui";

const Link = styled(LinkButton)`
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 97%;
    height: 80%;
    border: 4px solid var(--color-secondary);
    border-radius: 25px;
    transform: scaleX(0);
    transition: all 0.3s ease;
  };

  &:hover:before {
    transform: scaleX(1);
  };
`;

type AnimatedBorderButtonProps = {
  children: React.ReactNode;
};

function AnimatedBorderButton({ children }: AnimatedBorderButtonProps) {
  return <Link href="#">{children}</Link>
}

export default AnimatedBorderButton;

