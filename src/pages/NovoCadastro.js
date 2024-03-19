import React, { useState } from 'react';
import './Cadastro.css';
// import { Link } from "react-router-dom";

const NovoCadastro = () => {
    const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [height, setHeight] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="novo-cadastro-container">
      <h1 className="novo-cadastro-title">NOVO CADASTRO</h1>
      <p className="novo-cadastro-description">
        É RÁPIDINHO...<br />
        APÓS SEU CADASTRO INICIAL, NÃO ESQUEÇA<br />
        DE PREENCHER TODOS SEUS DADOS PARA ACUMULAR PONTOS!
      </p>
      <form onSubmit={handleSubmit} className="novo-cadastro-form">
        <div className="form-field">
          <label htmlFor="name">NOME:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">SOBRENOME:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="birthDate">DATA DE NASCIMENTO:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="height">ALTURA:</label>
          <input
            type="number"
            step="0.01"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">E-MAIL:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">NOVA SENHA:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="confirmPassword">CONFIRMAR SENHA:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="botao-cadastro">
          CADASTRAR
        </button>
      </form>
    </div>
  );
};

export default NovoCadastro;