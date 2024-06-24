import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  background-color: #333;
`;

const ListItem = styled.li`
  flex: 1;
`;

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

function HorizontalNavMenu() {
  return (
    <List>
      <ListItem><Link href="/home">Home</Link></ListItem>
      <ListItem><Link href="/about">About</Link></ListItem>
      <ListItem><Link href="/contact">Contact</Link></ListItem>
    </List>
  );
}

export default HorizontalNavMenu;
