import { useState } from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchContent } from "../../store/contentSlice";
import { showHideSearch } from "../../store/showSearchSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleShow = () => {
    dispatch(showHideSearch());
  };
  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchText = value;
      dispatch(fetchContent(searchText));
    }
  };
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
          <Button
            style={{
              backgroundColor: "#f0da5a",
              color: "black",
              border: "none",
              margin: "0 .5rem",
            }}
            onClick={handleShow}
          >
            + Advanced Search
          </Button>
          <Form style={{ marginRight: "2rem" }}>
            <Form.Control
              type="text"
              value={value}
              onKeyPress={handleSearch}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter Movies/TV Shows"
            />
          </Form>
          <Navbar.Text>
            Signed in as: <a href="#login">Roop Hayer</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
