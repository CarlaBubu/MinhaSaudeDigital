import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './pages/logo.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Paciente from './pages/Paciente';
import Profissional from './pages/Profissional';
import NovoCadastro from './pages/NovoCadastro';
import Navbar from './components/Navbar';
import RegistroPacientes from './pages/RegistroPacientes';
import RecuperarSenha from './pages/RecuperarSenha';
import NovaSenha from './pages/NovaSenha';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="paciente" element={<Paciente />} />
          <Route path="profissional" element={<Profissional />} />
          <Route path="registroPacientes" element={<RegistroPacientes />} />
          <Route path="novoCadastro" element={<NovoCadastro />}/>
          <Route path="RecuperarSenha" element={<RecuperarSenha />}/>
          <Route path="NovaSenha" element={<NovaSenha />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
