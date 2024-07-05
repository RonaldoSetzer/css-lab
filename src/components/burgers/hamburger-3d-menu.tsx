import { useState } from 'react';
import styled from 'styled-components';

const Burger = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  perspective: 1000px;
`;

const Line = styled.div<{ isOpen: boolean; index: number }>`
  width: 100%;
  height: 5px;
  background-color: var(--color-secondary);
  transition: transform 0.5s ease;
  transform: ${({ isOpen, index }) => 
    isOpen && (index === 0 ? 'rotateY(45deg) translateZ(5px)' : 
    index === 1 ? 'rotateY(-45deg) translateZ(5px)' : 
    'rotateY(45deg) translateZ(5px)')};
`;

function Hamburge3dMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <Burger onClick={toggleMenu}>
      <Line isOpen={isOpen} index={0} />
      <Line isOpen={isOpen} index={1} />
      <Line isOpen={isOpen} index={2} />
    </Burger>
  );
};

export default Hamburge3dMenu;
