import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  );
};

export default NavBar;
