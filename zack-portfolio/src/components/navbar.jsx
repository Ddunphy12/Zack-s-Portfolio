import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects-1">Projects</Link>
  </nav>
);

export default Navbar;
