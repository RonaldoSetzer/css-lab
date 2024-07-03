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
  background-color: ${({ isOpen }) => (isOpen ? 'var(--color-primary)' : 'var(--color-secondary)')};
`;

const ColorChangeHamburgerMenu = () => {
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

export default ColorChangeHamburgerMenu;
