import styled from "styled-components";

const Link = styled.a`
  position: relative;
  display: inline-block;
  padding: 16px 32px;
  color: white;
  background-color: var(--color-primary);
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10.01%);
    backgound-position: center;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:active::after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`;

type ConfirmButtonProps = {
  children: React.ReactNode;
};

function ConfirmButton({ children }: ConfirmButtonProps) {
  return (
    <Link href="#">{children}</Link>
  );
}
export default ConfirmButton


