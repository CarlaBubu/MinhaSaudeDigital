import './PaginasMeusRegistros.css';

const Exercicios = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
            <br />
                <p>EXERCÍCIOS FÍSICOS</p>
                <hr className="hr-linha"/>
                <div className="input-container">
                    <select style={{ width: 320 }}>
                        <option value="">Selecione o tipo de exercício</option>
                        <option value="Caminhada">Caminhada</option>
                        <option value="Corrida">Corrida</option>
                        <option value="Musculação">Musculação</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Pilates">Pilates</option>
                        <option value="Bicicleta">Bicicleta</option>
                        <option value="Luta">Luta</option>
                        <option value="Crossfit">Crossfit</option>
                        {/* <option value=""></option> */}
                    </select>
                    <br />
                    <input type="number" placeholder="Quantas vezes por semana" style={{ width: 300 }} />
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha"/>
                <div className="historico-container">
                    <div className="historico-item">
                        <p>CAMINHADA TODOS OS DIAS - NA ESTEIRA <span>16/10/2023</span></p>
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

export default Exercicios;