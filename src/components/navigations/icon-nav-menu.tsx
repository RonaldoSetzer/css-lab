import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  background-color: #333;
`;

const ListItem = styled.li``;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: white;
  padding: 14px 16px;
  text-decoration: none;

  i {
    margin-right: 8px;
  }

  &:hover {
    background-color: #111;
  }
`;

function IconNavMenu() {
  return (
    <List>
      <ListItem><Link href="/home"><i className="fa fa-home" />Home</Link></ListItem>
      <ListItem><Link href="/about"><i className="fa fa-user" /> About</Link></ListItem>
      <ListItem><Link href="/contact"><i className="fa fa-envelope"/>Contact</Link></ListItem>
    </List >
  );
}

export default IconNavMenu;


