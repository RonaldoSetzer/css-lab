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

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: black;
`;

function BasicHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <Burger onClick={toggleMenu}>
      <Line />
      <Line />
      <Line />
    </Burger>
  );
};

export default BasicHamburgerMenu;
