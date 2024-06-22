import styled from "styled-components";

const Link = styled.a`
  background-color: var(--color-primary);
  color: var(--main-bg-color);
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  margin: 4px 2px;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: var(--color-secondary);
    transition: all 0.3s ease;
  };

  &:hover:before {
    left: 0;
  };

  span {
    position: relative;
    z-index: 1;
  }
`;

type InteractiveButtonProps = {
  children: React.ReactNode;
};

function InteractiveButton({ children }: InteractiveButtonProps) {
  return <Link href="#"><span>{children}</span></Link>
}

export default InteractiveButton;




