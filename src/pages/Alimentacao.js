import './PaginasMeusRegistros.css';

const Alimentacao = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>ALIMENTAÇÃO</p>
                <hr className="hr-linha"/>
                <div className="input-container">
                    <input type="text" placeholder="DIGITE AS INFORMAÇÕES AQUI."style={{ width:300 }} />
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha"/>
                <div className="historico-container">
                    <div className="historico-item">
                        <p>INTOLERANTE A LACTOSE - EVITAR LEITE<span>16/10/2023</span></p>
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

export default Alimentacao;