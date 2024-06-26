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
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background: #fff;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover:after {
    width: 100%;
`;

function UnderlineEffectNavMenu() {
  return (
    <List>
      <ListItem><Link href="#home">Home</Link></ListItem>
      <ListItem><Link href="#services">Services</Link></ListItem>
      <ListItem><Link href="#about">About</Link></ListItem>
      <ListItem><Link href="#contact">Contact</Link></ListItem>
    </List>
  );
}
export default UnderlineEffectNavMenu

