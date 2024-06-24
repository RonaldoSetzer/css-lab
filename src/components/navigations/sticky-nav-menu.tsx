import styled from "styled-components";

const Container = styled.div``;

const List = styled.ul`
  position: fixed;
  width: 200px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #333;
  z-index: 1000;
`;

const ListItem = styled.li``;

const Link = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #111;
  }
`;

function StickyNavMenu() {
  return (
    <Container>
      <List>
        <ListItem><Link href="/home">Home</Link></ListItem>
        <ListItem><Link href="/about">About</Link></ListItem>
        <ListItem><Link href="/contact">Contact</Link></ListItem>
      </List>

      <div style={{ marginTop: '1px', padding: '16px' }}>
        <h1>Scroll Down to See the Effect</h1>
        <p>Some text bla bla bla bla bla bla bla bla bla bla bla bla..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
      </div>
    </Container>
  );
}

export default StickyNavMenu;

