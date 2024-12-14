import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Qap1 from "./Pages/projects-1";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Header from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects-1" element={<Qap1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
