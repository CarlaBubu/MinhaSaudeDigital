import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Paciente from './pages/Paciente';
import Profissional from './pages/Profissional';
import NovoCadastro from './pages/NovoCadastro';

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
          <Route path="novoCadastro" element={<NovoCadastro />}/>
        </Routes>
      </BrowserRouter>
      {/*<img src={process.env.PUBLIC_URL + "./image.png"} alt="logo da minha saúde digital" width={400} height={500} /> */}
    </div>
  );
}

export default App;
