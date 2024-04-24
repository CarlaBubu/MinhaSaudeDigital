import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";

const Profissional = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div className="first-container">
      <div className="welcome-container">
        <h3>SEJA BEM-VINDO!</h3>
        <h1>MINHA SAÚDE DIGITAL</h1>
      </div>
      <div className="login-container">
        <h2>Informe Seu E-mail</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>Informe Sua Senha</h2>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          Manter conectado
        </label>
      </div>
      <Link to="/registroPacientes" className="button-acessar">
        ACESSAR
      </Link>
      <div className="links-container">
        <a href="/recuperarSenha">ESQUECI MINHA SENHA</a>
        <Link to="/novoCadastro" >NOVO CADASTRO</Link>
      </div>
    </div>
  );
  };

  
  export default Profissional;
