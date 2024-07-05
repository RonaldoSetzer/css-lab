import { useState } from 'react';
import styled from 'styled-components';

const Burger = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

const Line = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 5px;
  background-color: var(--color-secondary);
  transition: all 0.5s ease;
  transform-origin: center;
  &:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translateY(10px)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0)'};
  }
`;

const MorphingHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <Burger onClick={toggleMenu}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </Burger>
  );
};

export default MorphingHamburgerMenu;
