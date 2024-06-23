import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  background-color: #333;

`;
const SubList = styled.ul`
    display: none;
    position: absolute;
    background-color: #333;
    top: 100%;
    left: 0;
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
      padding: 10px 16px;
    }

    a:hover {
      background-color: #111;
    }
`;

const ListItem = styled.li`
  position: relative;

  &:hover > ul {
    display: block;
  }
`;

const Link = styled.a`
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
`;

function DropdownNavigation() {
  return (
    <List>
      <ListItem><Link href="/home">Home</Link></ListItem>
      <ListItem>
        <Link href="/about">About</Link>
        <SubList>
          <ListItem><Link href="/team">Team</Link></ListItem>
          <ListItem><Link href="/careers">Careers</Link></ListItem>
        </SubList>
      </ListItem>
      <ListItem><Link href="/contact">Contact</Link></ListItem>
    </List>
  );
}

export default DropdownNavigation;


