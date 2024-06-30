import { useState } from 'react';

import styled from "styled-components";
import { Button } from '../ui';

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
  overflow-y: auto;
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

function ModalWithScroll(){
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
              <span>Modal with Scroll</span>
              <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            </Head>
            <Body>
              <p>
                this is a modal with scroll.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              </p>
              <p>
                Donec egestas. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
              </p>
              <p>
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
              </p>
              <p>
                Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
              </p>
              <p>
                Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
              </p>
              <p>
                Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.
              </p>
              <p>
                Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.
              </p>
              <p>
                Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis.
              </p>
                
            </Body>
          </Content>
        </Modal>
      )}
    </Container>
  );
}

export default ModalWithScroll;
