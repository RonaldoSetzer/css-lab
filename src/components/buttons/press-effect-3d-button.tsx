import styled from "styled-components";

const Link = styled.a`

  position: relative;
  display: inline-block;
  padding: 12px 24px;
  color: var(--main-bg-color);
  background-color: var(--color-primary);
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 4px;
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





