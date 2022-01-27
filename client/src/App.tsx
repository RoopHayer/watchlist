import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Form from "./components/contentForm/ContentForm";
import Results from "./components/results/Results";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "./components/profile/profile";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ margin: "0 10rem" }}>
                  <Home />
                  <Form />
                  <Results />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
