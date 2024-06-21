import styled from "styled-components";

const Link = styled.a`
  background: linear-gradient(45deg, var(--color-secondary), var(--color-support));
  color: var(--main-bg-color);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  margin: 4px 2px;
  transition: background 0.3s;
  border-radius: 4px;

  &:hover {
    background: linear-gradient(to right, var(--color-support), var(--color-secondary));
  };
`;

type GradientButtonProps = {
  children: React.ReactNode;
};

function GradientButton({ children }: GradientButtonProps) {
  return <Link href="#">{children}</Link>
}

export default GradientButton;


