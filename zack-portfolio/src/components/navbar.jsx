import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects-1">Projects</Link>
  </nav>
);

export default Navbar;
