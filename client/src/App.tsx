import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Form from "./components/contentForm/ContentForm";
import Results from "./components/results/Results";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <div style={{ margin: "0 10rem" }}>
        <Home />
        <Form />
        <Results />
      </div>
      <Footer />
    </>
  );
}

export default App;
