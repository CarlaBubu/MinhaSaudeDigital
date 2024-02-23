import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Paciente from './pages/Paciente';
import Profissional from './pages/Profissional';

//components
import Navbar from './components/Navbar';
import RegistroPacientes from './pages/RegistroPacientes';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
