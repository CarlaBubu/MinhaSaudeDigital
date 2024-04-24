import React, { useState } from 'react';
import './RecuperarSenha.css';

const RecuperarSenha = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="recuperar-senha-container">
      <h1 className="recuperar-senha-title">RECUPERAR SENHA</h1>
      <p className="recuperar-senha-description">
        VAMOS ENVIAR A RECUPERAÇÃO DE SENHA POR E-MAIL.
      </p>
      <form onSubmit={handleSubmit} className="recuperar-senha-form">
        <label htmlFor="nome" className="recuperar-senha-label">
          NOME:
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="recuperar-senha-input"
        />
        <label htmlFor="sobrenome" className="recuperar-senha-label">
          SOBRENOME:
        </label>
        <input
          type="text"
          id="sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          className="recuperar-senha-input"
        />
        <label htmlFor="email" className="recuperar-senha-label">
          E-MAIL:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="recuperar-senha-input"
        />
        <button type="submit" className="recuperar-senha-button">
          RECUPERAR MINHA SENHA
        </button>
      </form>
    </div>
  );
};

export default RecuperarSenha;