import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #333;
`;

const ListItem = styled.li``;

const Link = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #111;
    color: #ff4081;
  }
`;

function TransitionEffectNavMenu() {
  return (
    <List>
      <ListItem><Link href="#home">Home</Link></ListItem>
      <ListItem><Link href="#services">Services</Link></ListItem>
      <ListItem><Link href="#about">About</Link></ListItem>
      <ListItem><Link href="#contact">Contact</Link></ListItem>
    </List>
  );
}
export default TransitionEffectNavMenu
