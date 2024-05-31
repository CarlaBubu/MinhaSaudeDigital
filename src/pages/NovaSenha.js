import React, { useState } from 'react';
import './RecuperarSenha.css';

const NovaSenha = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="recuperar-senha-container">
      <h1 className="recuperar-senha-title">NOVA SENHA</h1>
      <p className="recuperar-senha-description">
        INFORME O CÓDIGO PARA GERAR UMA NOVA SENHA.
      </p>
      <form onSubmit={handleSubmit} className="recuperar-senha-form">
        <label htmlFor="code" className="recuperar-senha-label">
          CÓDIGO:
        </label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="recuperar-senha-input"
          style={{ width: 300 }}
        />
        <label htmlFor="new-password" className="recuperar-senha-label">
          NOVA SENHA:
        </label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="recuperar-senha-input"
          style={{ width: 300 }}
        />
        <label htmlFor="confirm-new-password" className="recuperar-senha-label">
          CONFIRMAR NOVA SENHA:
        </label>
        <input
          type="password"
          id="confirm-new-password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="recuperar-senha-input"
          style={{ width: 300 }}
        />
        <button type="submit" className="recuperar-senha-button">
          CONFIRMAR
        </button>
      </form>
    </div>
  );
};

export default NovaSenha;