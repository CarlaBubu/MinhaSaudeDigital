import React, { useState } from 'react';
import './RegistroPacientes.css';
import medico from './medico.png';
import lupa from './lupa.png';
import oxigenio from './oxigenio.png';
import coracao from './coracao.png';
import termometro from './termometro.png';
import pressao from './pressao.png'; 
import carolina from './carolina.png';

const RegistroPacientes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registro-pacientes">
      <div className="parent-container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={medico} alt="Médico" /> 
          <h2>Dr. Adriano Lopes</h2> 
        </div>
        <div className="registroP">
          <h1>REGISTRO DE PACIENTES</h1> 
        </div>
      </div>
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar"
          />
          <img src={lupa} alt="Ícone de lupa" className="search-icon" />
        </div>
      </form>
      <div className="paciente-card">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={carolina} alt="Paciente" className="paciente-img" />
        <div className="paciente-info">
          <h4>Carolina Lopes</h4>
          <div className="paciente-status">
            <div className="status-bar" style={{ width: "40px" }}>
              <span className="status-percentage">45%</span>
            </div>
            </div>
            <img src={oxigenio} alt="Pulmão" className="status-icon" />
            <img src={coracao} alt="Coração" className="status-icon" />
            <img src={termometro} alt="Termômetro" className="status-icon" />
            <img src={pressao} alt="Pressão" className="status-icon" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroPacientes;