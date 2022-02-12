import { Navbar, Nav } from "react-bootstrap";
export default function Footer() {
  return (
    <Navbar
      style={{
        position: "fixed",
        width: "100%",
        bottom: "0",
        paddingLeft: " 10rem",
        paddingRight: " 10rem",
      }}
      bg="dark"
      variant="dark"
    >
      <Nav className="me-auto">
        <Nav.Link href="#home">Contact</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}
