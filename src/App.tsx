import { GlobalStyles } from "./Global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Investors from "./pages/investors";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investors" element={<Investors/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
