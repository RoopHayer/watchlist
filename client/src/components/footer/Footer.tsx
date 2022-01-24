import { Navbar, Container, Nav } from "react-bootstrap";
export default function Footer() {
  return (
    <Navbar
      style={{ position: "fixed", width: "100%", bottom: "0" }}
      bg="dark"
      variant="dark"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Contact</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
