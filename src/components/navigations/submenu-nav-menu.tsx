import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #333;

  li:hover > ul {
    display: block;
  }
`;

const ListItem = styled.li`
  position: relative;
`;

const Link = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const Submenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #333;

  a {
    padding: 10px 16px;
  }

  a:hover {
    background-color: #111;
  }
`;

function SubmenuNavMenu() {
  return (
    <List>
      <ListItem><Link href="#home">Home</Link></ListItem>
      <ListItem>
        <Link href="#services">Services</Link>
        <Submenu>
          <ListItem><Link href="#services-web">Web</Link></ListItem>
          <ListItem><Link href="#services-mobile">Mobile</Link></ListItem>
          <ListItem><Link href="#services-iot">IoT</Link></ListItem>
        </Submenu>
      </ListItem>
      <ListItem>
        <Link href="#about">About</Link>
        <Submenu>
          <ListItem><Link href="#about-team">Team</Link></ListItem>
          <ListItem><Link href="#about-location">Location</Link></ListItem>
        </Submenu>
      </ListItem>
      <ListItem><Link href="#contact">Contact</Link></ListItem>
    </List>
  );
}
export default SubmenuNavMenu

