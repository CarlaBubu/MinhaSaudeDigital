import './PaginasMinhaSaude.css';

const Arterial = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>PRESSÃO ARTERIAL</p>
                <hr className="hr-linha"/>
                <div className="input-container">
                    <input type="number" placeholder="PA Máxima (Sistólica)" style={{ width: 250, height: 40 }}/>
                    <input type="number" placeholder="PA Miníma (Diastólica)" style={{ width: 250, height: 40 }}/>
                    <span>mmHg</span>
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha"/>
                <div className="historico-container">
                    <div className="historico-item">
                        <p>120x80 mmHg <span>16/10/2023</span></p>
                    </div>
                    <hr />
                    <div className="historico-item">
                        <p>120x80 mmHg <span>17/10/2023</span></p>
                    </div>
                    <hr />
                    <div className="historico-item">
                        <p>120x80 mmHg <span>18/10/2023</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arterial;