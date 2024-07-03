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
  transform: ${({ isOpen, index }) => isOpen && (index === 0 ? 'translateY(10px)' : index === 2 ? 'translateY(-10px)' : 'translateX(0)')};
`;

const SlideHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Burger onClick={() => setIsOpen(!isOpen)}>
      <Line isOpen={isOpen} index={0} />
      <Line isOpen={isOpen} index={1} />
      <Line isOpen={isOpen} index={2} />
    </Burger>
  );
};

export default SlideHamburgerMenu;
