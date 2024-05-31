import { Link } from 'react-router-dom';
import './MinhaSaude.css';

const MeusRegistros = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
                <br />
                <p>MEUS REGISTROS</p>
                <hr />
                <div className="registro">
                    <div className="icone"><img src="medicamentos.png" alt="medicamentos" /></div>
                    <div className="informacao">
                        <h5>MEDICAMENTOS</h5>
                    </div>
                    <div className="botao">
                        <Link to="/medicamentos">
                            <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="consultas.png" alt="consultas" /></div>
                    <div className="informacao">
                        <h5>CONSULTAS</h5>
                    </div>
                    <div className="botao">
                        <Link to="/consultas">
                            <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="procedimentos.png" alt="procedimentos" /></div>
                    <div className="informacao">
                        <h5>PROCEDIMENTOS</h5>
                    </div>
                    <div className="botao">
                        <Link to="/procedimentos">
                            <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="vacina.png" alt="vacinação" /></div>
                    <div className="informacao">
                        <h5>VACINAÇÃO</h5>
                    </div>
                    <div className="botao">
                        <Link to="/vacinacao">
                            <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="alimento.png" alt="alimentação" /></div>
                    <div className="informacao">
                        <h5>ALIMENTAÇÃO</h5>
                    </div>
                    <div className="botao">
                        <Link to="/alimentacao">
                            <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="exercicio.png" alt="exercícios" /></div>
                    <div className="informacao">
                        <h5>EXERCÍCIOS</h5>
                    </div>
                    <div className="botao">
                        <Link to="/exercicios">
                            <span>VER HISTÓRICO</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeusRegistros;