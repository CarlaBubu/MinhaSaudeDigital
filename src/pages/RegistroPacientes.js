import React, { useState } from 'react';
import './RegistroPacientes.css';

const RegistroPacientes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
  };

  return (
    <div className="registro-pacientes">
      <h1>REGISTRO DE PACIENTES</h1>
      <form>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar"
        /> <button type="button" onClick={handleSearch}>PESQUISAR</button>
      </form>
    </div>
  );
};

export default RegistroPacientes;