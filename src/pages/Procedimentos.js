import './PaginasMeusRegistros.css';

const Procedimentos = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>PROCEDIMENTOS</p>
                <hr className="hr-linha"/>
                <div className="input-container">
                    <select style={{ width: 320 }}>
                        <option value="">Selecione o tipo de procedimento</option>
                        <option value="Coleta de sangue">Coleta de sangue</option>
                        <option value="Exame de imagem">Exame de imagem</option>
                        <option value="Consulta médica">Consulta médica</option>
                        {/* <option value=""></option> */}
                    </select>
                    <br />
                    <select style={{ width: 320 }}>
                        <option value="">Selecione a clínica ou consultório</option>
                        <option value="Clínica São Paulo">Clínica Porto Alegre</option>
                        <option value="Consultório Médico">Consultório Médico</option>
                        {/* <option value=""></option> */}
                    </select>
                    <br />
                    <input type="date" placeholder="Data do procedimento" style={{ width: 300 }} />
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha"/>
                <div className="historico-container">
                    <div className="historico-item">
                        <p>COLETA DE SANGUE - CLINICA: 05/10/2023 <span>16/10/2023</span></p>
                    </div>
                    <hr />
                    <br/>
                    <hr />
                    <br/>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Procedimentos;