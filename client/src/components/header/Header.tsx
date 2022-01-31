import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          width: "100%",
          paddingLeft: " 10rem",
          paddingRight: " 10rem",
        }}
      >
        <Navbar.Brand href="#home">Watchlist</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/profile"}>
            Profile
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form style={{ marginRight: "2rem" }}>
            <Form.Control type="text" placeholder="Enter Movies/TV Shows" />
          </Form>
          <Navbar.Text>
            Signed in as: <a href="#login">Roop Hayer</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </>
  );
}
