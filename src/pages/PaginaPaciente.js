import './PaginaPaciente.css';
import { Link } from 'react-router-dom';

const PaginaPaciente = () => {
  return (
    <div className="registro-pacientes">
      <h1>OLÁ CAROLINA LOPES!</h1>
      <img src="/carolina.png" alt="Foto de Carolina Lopes" className='foto'/> 
      <p>SINAIS VITAIS</p>
      <hr />
      <div className="sinais-vitais">
        <div className="sinal-vital">
          <img src="/oxigenio.png" alt="Icone de Oxigênio" />
          <span>SATURAÇÃO OXIGÊNIO</span>
          <input type="number" placeholder="%" style={{ width: 150 }}/>
        </div>
        <div className="sinal-vital">
          <img src="/coracao.png" alt="Icone de Coração" />
          <span>FREQUÊNCIA CARDÍACA</span>
          <input type="number" placeholder="bpm" style={{ width: 150 }} />
        </div>
      </div>
      <div className="sinais-vitais">
        <div className="sinal-vital">
          <img src="/pressao.png" alt="Icone de Pressão" />
          <span>PRESSÃO ARTERIAL</span>
          <input type="number" placeholder="mmHg" style={{ width: 150 }}/>
        </div>
        <div className="sinal-vital">
          <img src="/termometro.png" alt="Icone de Termômetro" />
          <span>TEMPERATURA CORPORAL</span>
          <input type="number" placeholder="°C" style={{ width: 150 }}/>
        </div>
      </div>
      <div className="botoes">
        <p>MINHAS INFORMAÇÕES</p>
        <hr />
        <Link to="/minhaSaude">
          <button className="botoes-registros">MINHA SAÚDE</button>
        </Link>
        <br />
        <Link to="/meusRegistros">
          <button className="botoes-registros">MEUS REGISTROS</button>
        </Link>
      </div>
    </div>
  );
};

export default PaginaPaciente;