import './MinhaSaude.css';
import { Link } from 'react-router-dom';

const MinhaSaude = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>MINHA SAÚDE</p>
                <div className="registro">
                    <div className="icone"><img src="peso.png" alt="Peso"/></div>
                    <div className="informacao">
                        <h5>PESO</h5>
                        <h4>Kg</h4>
                    </div>
                    <div className="botao">
                    <Link to="/peso" >
                        <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="glicose.png" alt="Glicose"/></div>
                    <div className="informacao">
                        <h5>GLICOSE</h5>
                        <h4>mg/dL</h4>
                    </div>
                    <div className="botao"> 
                    <Link to="/glicose">
                        <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="pressao.png" alt="Pressão Arterial"/></div>
                    <div className="informacao">
                        <h5>PRESSÃO ARTERIAL</h5>
                        <h4>mmHg</h4>
                    </div>
                    <div className="botao"> 
                    <Link to="/arterial">
                        <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="coracao.png" alt="Frequência Cardíaca"/></div>
                    <div className="informacao">
                        <h5>FREQUÊNCIA CARDÍACA</h5>
                        <h4>bpm</h4>
                    </div>
                    <div className="botao"> 
                    <Link to="/coracao">
                        <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="oxigenio.png" alt="Saturação de Oxigênio"/></div>
                    <div className="informacao">
                        <h5>SATURAÇÃO DE OXIGENIO</h5>
                        <h4>%</h4>
                    </div>
                    <div className="botao"> 
                    <Link to="/oxigenio">
                        <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="termometro.png" alt="Temperatura Corporal"/></div>
                    <div className="informacao">
                        <h5>TEMPERATURA CORPORAL</h5>
                        <h4>°C</h4>
                    </div>
                    <div className="botao">
                    <Link to="/temperatura">
                        <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinhaSaude;