import { useState } from "react";
import { Button } from "../ui";
import styled, { keyframes } from "styled-components";

const Container = styled.div``;

const Modal = styled.div<{ isClosing?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  opacity: 0;
  transition: opacity 0.5s ease;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.5s forwards;
`;

const Content = styled.div`
  flex-direction: column;
  background-color: var(--visual-ui2);
  border-radius: 5px;
  width: 300px;
  height: 300px;
`;

const Head = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background-color: var(--visual-ui1);
  border-radius: 5px 5px 0 0;
  position: relative;
`;

const Body = styled.div`
  padding: 10px;
`;

const CloseButton = styled.span`
  cursor: pointer;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

function ModalWithAnimation(){
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
    setIsClosing(false);
  }

  function handleCloseModal() {
    setIsOpen(false);
    setTimeout(() => { setIsClosing(true); }, 500);
  }

  return (
    <Container>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      {isOpen && (
        <Modal isClosing={isClosing}>
          <Content>
            <Head>
              <span>Modal with Image</span>
              <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            </Head>
            <Body>
              <p>
                this is a modal with an animation
              </p>
            </Body>
          </Content>
        </Modal>
      )}
    </Container>
  );
}

export default ModalWithAnimation;

