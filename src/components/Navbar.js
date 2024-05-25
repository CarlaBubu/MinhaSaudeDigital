import React from 'react';
import './Navbar.css';
import logo from '../pages/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <Link to="/home" class="nav-text" >INICIO</Link>
    </nav>
  );
};

export default Navbar;