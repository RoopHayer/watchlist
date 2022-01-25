import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ width: "100%" }}>
        <Container>
          <Navbar.Brand href="#home">Watchlist</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Roop Hayer</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
