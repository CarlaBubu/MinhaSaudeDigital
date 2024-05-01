import React from 'react';
import { Link } from 'react-router-dom';
import './RecuperarSenha.css';

const RecuperarSenha = () => {
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password recovery logic here
    // Send request to server or API to recover password
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
        <Link to="/NovaSenha" className="recuperar-senha-button-link">
          <button type="button" className="recuperar-senha-button">
            RECUPERAR MINHA SENHA
          </button>
        </Link>
      </form>
    </div>
  );
};

export default RecuperarSenha;