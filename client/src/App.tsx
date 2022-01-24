import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Form from "./components/contentForm/ContentForm";
import Results from "./components/results/Results";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <Form />
        <Results />
      </Container>
      <Footer />
    </>
  );
}

export default App;
