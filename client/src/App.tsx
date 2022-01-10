import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Form from './components/form/Form';
import Results from './components/results/Results';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <Form/>
      <Results/>
      <Footer/>
    </div>
  );
}

export default App;
