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
  box-shadow: 0 4px #999;
  transition: box-shadow 0.3s;
  border-radius: 4px;

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

