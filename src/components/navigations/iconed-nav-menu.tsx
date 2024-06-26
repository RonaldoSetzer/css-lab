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

  &:hover {
    background-color: #111;
  }
`;

const Icon = styled.i`
  margin-right: 8px;
`;

function IconedNavMenu() {
  return (
    <List>
      <ListItem><Link href="#home"><Icon className="fa fa-home"></Icon> Home</Link></ListItem>
      <ListItem><Link href="#services"><Icon className="fa fa-cog"></Icon> Services</Link></ListItem>
      <ListItem><Link href="#about"><Icon className="fa fa-user"></Icon> About</Link></ListItem>
      <ListItem><Link href="#contact"><Icon className="fa fa-envelope"></Icon> Contact</Link></ListItem>
      <ListItem><Link href="#facebook"><Icon className="fa fa-facebook"></Icon> Facebook</Link></ListItem>
      <ListItem><Link href="#twitter"><Icon className="fa fa-twitter"></Icon> Twitter</Link></ListItem>
    </List>
  );
}
export default IconedNavMenu;

