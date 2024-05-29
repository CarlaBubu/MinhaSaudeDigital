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
                <div className="registro">
                    <div className="icone"><img src="medicamentos.png" alt="medicamentos" /></div>
                    <div className="informacao">
                        <h5>MEDICAMENTOS</h5>
                    </div>
                    <div className="botao"><span>VER HISTÓRICO</span></div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="consultas.png" alt="consultas" /></div>
                    <div className="informacao">
                        <h5>CONSULTAS</h5>
                    </div>
                    <div className="botao"> <span>VER HISTÓRICO</span> </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="procedimentos.png" alt="procedimentos" /></div>
                    <div className="informacao">
                        <h5>PROCEDIMENTOS</h5>
                    </div>
                    <div className="botao"> <span>VER HISTÓRICO</span> </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="vacina.png" alt="vacinação" /></div>
                    <div className="informacao">
                        <h5>VACINAÇÃO</h5>
                    </div>
                    <div className="botao"> <span>VER HISTÓRICO</span> </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="alimento.png" alt="alimentação" /></div>
                    <div className="informacao">
                        <h5>ALIMENTAÇÃO</h5>
                    </div>
                    <div className="botao"> <span>VER HISTÓRICO</span> </div>
                </div>
                <div className="registro">
                    <div className="icone"><img src="exercicio.png" alt="exercícios" /></div>
                    <div className="informacao">
                        <h5>EXERCÍCIOS</h5>
                    </div>
                    <div className="botao"> <span>VER HISTÓRICO</span> </div>
                </div>
            </div>
        </div>
    );
};

export default MeusRegistros;