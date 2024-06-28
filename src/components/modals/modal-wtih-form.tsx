import { useState } from "react";
import { Button } from "../ui";
import styled from "styled-components";

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

const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type="text"],
  input[type="email"]{
    margin-left: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--visual-ui1);
    placeholder: var(--main-fg-color);
  }
`;

function ModalWithForm(){
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
            <Head>
              <span>Modal with Image</span>
              <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            </Head>
            <Body>
              <p>
                this is a modal with a form
              </p>
              <Form>
                <label>
                  Name:
                  <input type="text" name="name" placeholder="name"/>
                </label>
                <label>
                  Email:
                  <input type="email" name="email" placeholder="email@email.com"/>
                </label>
                <Button type="submit">Submit</Button>
              </Form>
            </Body>
          </Content>
        </Modal>
      )}
    </Container>
  );
}

export default ModalWithForm;
