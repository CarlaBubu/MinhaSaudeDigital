import './PaginasMinhaSaude.css';

const Temperatura = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>TEMPERATURA CORPORAL</p>
                <hr className="hr-linha"/>
                <div className="input-container">
                    <input type="number" placeholder="Temperatura" style={{ width: 250 }}/>
                    <span>ºC</span>
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha"/>
                <div className="historico-container">
                    <div className="historico-item">
                        <p>40ºC <span>16/10/2023</span></p>
                    </div>
                    <hr />
                    <div className="historico-item">
                        <p>38ºC <span>17/10/2023</span></p>
                    </div>
                    <hr />
                    <div className="historico-item">
                        <p>36ºC <span>18/10/2023</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temperatura;