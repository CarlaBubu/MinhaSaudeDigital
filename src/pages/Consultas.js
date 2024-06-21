import './PaginasMeusRegistros.css';

const Consultas = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>CONSULTAS</p>
                <hr className="hr-linha"/>
                <div className="input-container">
                    <select style={{ width: 320 }}>
                        <option value="">Selecione a especialidade</option>
                        <option value="Cardiologista">Cardiologista</option>
                        <option value="Neurologista">Neurologista</option>
                        <option value="Pediatra">Pediatra</option>
                        <option value="Oftamoulogista">Oftamoulogista</option>
                        <option value="Psiquiatra">Psiquiatra</option>
                        <option value="Psicologo">Psicologo</option>
                        {/* <option value=""></option> */}
                    </select>
                    <br />
                    <input type="text" placeholder="Nome do médico" style={{ width: 300 }} />
                    <br />
                    <input type="date" placeholder="Data da consulta" style={{ width: 300 }} />
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha"/>
                <div className="historico-container">
                    <div className="historico-item">
                        <p>Cardiologista - Dr José: 05/11/2023 <span>16/10/2023</span></p>
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

export default Consultas;