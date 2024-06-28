import { useState } from "react";
import styled from "styled-components";
import { Button } from "../ui";

const Container = styled.div``;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;

const Content = styled.div`
  background-color: var(--visual-ui2);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  width: 300px;
  height: 200px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

function BasicModal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      {isOpen && (
        <Modal>
          <Content>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <h2>Basic Modal</h2>
          </Content>
        </Modal>
      )}
    </Container>
  );
}
export default BasicModal;
