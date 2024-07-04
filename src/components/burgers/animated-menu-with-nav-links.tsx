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

const Line = styled.div<{ isOpen: boolean; index: number }>`
  width: 100%;
  height: 5px;
  background-color: var(--color-secondary);
  transition: transform 0.3s ease;
  transform: ${({ isOpen, index }) => isOpen && (index === 0 ? 'rotate(45deg) translate(5px, 5px)' : index === 1 ? 'scale(0)' : 'rotate(-45deg) translate(5px, -5px)')};
`;

const NavMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
`;

const AnimatedMenuWithNavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Burger onClick={toggleMenu}>
        <Line isOpen={isOpen} index={0} />
        <Line isOpen={isOpen} index={1} />
        <Line isOpen={isOpen} index={2} />
      </Burger>
      <NavMenu isOpen={isOpen}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </NavMenu>
    </div>
  );
};

export default AnimatedMenuWithNavLinks;
