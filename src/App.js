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
import Peso from './pages/Peso';
import Glicose from './pages/Glicose';
import Arterial from './pages/Arterial';
import Coracao from './pages/Coracao';
import Oxigenio from './pages/Oxigenio';
import Temperatura from './pages/Temperatura';
import Medicamentos from './pages/Medicamentos';
import Consultas from './pages/Consultas';
import Procedimentos from './pages/Procedimentos';
import Vacinacao from './pages/Vacinacao';
import Alimentacao from './pages/Alimentacao';
import Exercicios from './pages/Exercicios';
import PerfilDoPaciente from './pages/PerfilDoPaciente';
import HomeIntegracao from './pages/HomeIntegracao';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="HomeIntegracao" element={<HomeIntegracao/> } />
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
          <Route path="Peso" element={<Peso />}/>
          <Route path="Glicose" element={<Glicose/> } />
          <Route path="Arterial" element={<Arterial/> } />
          <Route path="Coracao" element={<Coracao/> } />
          <Route path="Oxigenio" element={<Oxigenio/> } />
          <Route path="Temperatura" element={<Temperatura/> } />
          <Route path="Medicamentos" element={<Medicamentos/> } />
          <Route path="Consultas" element={<Consultas/> } />
          <Route path="Procedimentos" element={<Procedimentos/> } />
          <Route path="Vacinacao" element={<Vacinacao/> } />
          <Route path="Alimentacao" element={<Alimentacao/> } />
          <Route path="Exercicios" element={<Exercicios/> } />
          <Route path="PerfilDoPaciente" element={<PerfilDoPaciente/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
