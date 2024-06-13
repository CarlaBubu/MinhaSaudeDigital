import React, { useState } from 'react';
import './PerfilDoPaciente.css';
import medico from './medico.png';
import carolina from './carolina.png';
import lupa from './lupa.png';
import { FaHeart, FaPhoneAlt, FaMapMarkerAlt, FaAmbulance } from 'react-icons/fa';

const PerfilDoPaciente = () => {
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
          <h1>PERFIL DO PACIENTE</h1>
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
      <br/>
      <br/>
      <div className="paciente-info">
        <div className="paciente-img">
          <img src={carolina} alt="Carolina Lopes" style={{ width: "100px", height: "100px"}}/>
        </div>
        <div className="paciente-details">
          <h2>Carolina Lopes</h2>
          <div className="details-info">
            <h1>73 anos</h1>
            <h1>68 kg</h1>
            <h1>170 cm</h1>
            <h1>O+</h1>
          </div>
          <div className="blood-pressure">
            <h3>PRESSÃO ARTERIAL</h3>
            <div className="pressure-values">
                <p>120x80 mmHg</p>
                <h4>3 minutos atrás</h4>
                </div>
          </div>
        </div>
        <div className="patient-icons">
          <FaHeart size={24} color="#e74c3c" />
          <FaPhoneAlt size={24} color="#2ecc71" />
          <FaMapMarkerAlt size={24} color="#3498db" />
          <FaAmbulance size={24} color="#f1c40f" />
        </div>
      </div>
    </div>
  );
};

export default PerfilDoPaciente;