import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <nav>
        <Link to="home">Home</Link>
        <Link to="paciente">Paciente</Link>
        <Link to="/profissional">Profissional</Link>
    </nav>
    );
  };
  
  export default Navbar;