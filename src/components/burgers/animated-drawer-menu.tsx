import React, { useState } from 'react';
import styled from 'styled-components';

const Burger = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
`;

const Line = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 5px;
  background-color: var(--color-secondary);
  transition: transform 0.3s ease, opacity 0.3s ease;
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

const Drawer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 35px;
  left: 0;
  width: 200px;
  height: 100px;
  padding: 20px;
  background-color: var(--visual-ui1);
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;

  p {
    margin: 10px 0;
    color: white;
    cursor: pointer;
  }
`;

const AnimatedDrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
      </Burger>
      <Drawer isOpen={isOpen}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </Drawer>
    </div>
  );
};

export default AnimatedDrawerMenu;
