import styled from "styled-components";

const Link = styled.a`

  backgound: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  color: transparent;
  border: 2px solid var(--color-primary);
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  margin: 4px 2px;
  border-radius: 4px;
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

