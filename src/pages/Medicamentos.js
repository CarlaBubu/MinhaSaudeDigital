import './PaginasMeusRegistros.css';

const Medicamentos = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>MEDICAMENTOS</p>
                <hr className="hr-linha"/>
                <div className="input-container">
                    <input type="text" placeholder="Nome do medicamento" style= {{ width: '300px'}}/>
                    <input type="number" placeholder="Dosagem (mg)" style={{ width: '300px'}}/>
                    <input type="number" placeholder="Quantidade por dia" style={{ width: '300px'}}/>
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha"/>
                <div className="historico-container">
                    <div className="historico-item">
                        <p>Hidroclorotiazida 25mg - 1x por dia por 30 dias  <span>16/10/2023</span></p>
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

export default Medicamentos;