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
  transition: transform 0.3s;
  border-radius: 4px;

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


