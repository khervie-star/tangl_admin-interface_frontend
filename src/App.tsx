import NavBar from "./components/Nav";
import { Container, GlobalStyles } from "./Global";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Investors from "./pages/investors";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Router>
        <NavBar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
