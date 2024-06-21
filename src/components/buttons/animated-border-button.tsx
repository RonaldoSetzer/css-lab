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
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-secondary);
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



