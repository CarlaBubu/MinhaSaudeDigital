import './PaginasMinhaSaude.css';

const Glicose = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>GLICOSE</p>
                <hr className="hr-linha"/>
                <div className="input-container">
                    <input type="number" placeholder="Glicose" style={{ width: 250 }}/>
                    <span>mg/dL</span>
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha"/>
                <div className="historico-container">
                    <div className="historico-item">
                        <p>112 mg/dL <span>16/10/2023</span></p>
                    </div>
                    <hr />
                    <div className="historico-item">
                        <p>90 mg/dL <span>17/10/2023</span></p>
                    </div>
                    <hr />
                    <div className="historico-item">
                        <p>100 mg/dL <span>18/10/2023</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Glicose;