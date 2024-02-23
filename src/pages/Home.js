//import React from 'react';
import './Home.css';
import logo from './logo.png'; 
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">ACESSAR COMO:</h1>

      <nav className="button-container">
        <Link to="/paciente" className="button">
          PACIENTE
        </Link>
        <Link to="/profissional" className="button">
          PROFISSIONAL
        </Link>
      </nav>
    </div>
  );
}

export default Home;