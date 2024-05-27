import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Paciente from './pages/Paciente';
import Profissional from './pages/Profissional';
import NovoCadastro from './pages/NovoCadastro';
import Navbar from './components/Navbar';
import RegistroPacientes from './pages/RegistroPacientes';
import RecuperarSenha from './pages/RecuperarSenha';
import NovaSenha from './pages/NovaSenha';
import PaginaPaciente from './pages/PaginaPaciente';
import MinhaSaude from './pages/MinhaSaude';
import MeusRegistros from './pages/MeusRegistros';

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
          <Route path="PaginaPaciente" element={<PaginaPaciente />}/>
          <Route path="MinhaSaude" element={<MinhaSaude />}/>
          <Route path="MeusRegistros" element={<MeusRegistros />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
