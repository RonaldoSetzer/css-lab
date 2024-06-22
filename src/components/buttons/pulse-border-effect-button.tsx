import styled from "styled-components";

const Link = styled.a`
  display: inline-block;
  padding: 12px 24px;
  color: var(--main-bg-color);
  background-color: var(--color-primary);
  border: none;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.4);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.4);
    }
    70% {
      box-shadow: 0 0 0 20px rgba(233, 30, 99, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(233, 30, 99, 0);
    }
  }
`;

type PulseBorderEffectButtonProps = {
  children: React.ReactNode;
};

function PulseBorderEffectButton({ children }: PulseBorderEffectButtonProps) {
  return <Link href="#">{children}</Link>
}

export default PulseBorderEffectButton;




