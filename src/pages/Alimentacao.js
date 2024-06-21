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
                    <select style={{ width: 320 }}>
                        <option value="">Selecione um alimento</option>
                        <option value="Abacate">Abacate</option>
                        <option value="Açúcar">Açúcar</option>
                        <option value="Alface">Alface</option>
                        <option value="Alho">Alho</option>
                        <option value="Amendoim">Amendoim</option>
                        <option value="Arroz">Arroz</option>
                        <option value="Aveia">Aveia</option>
                        <option value="Banana">Banana</option>
                        <option value="Batata">Batata</option>
                        <option value="Café">Café</option>
                        <option value="Cebola">Cebola</option>
                        <option value="Cenoura">Cenoura</option>
                        <option value="Chá">Chá</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Coco">Coco</option>
                        <option value="Couve-flor">Couve-flor</option>
                        <option value="Feijão">Feijão</option>
                        <option value="Figo">Figo</option>
                        <option value="Frango">Frango</option>
                        <option value="Gelatina">Gelatina</option>
                        <option value="Gengibre">Gengibre</option>
                        <option value="Gordura">Gordura</option>
                        <option value="Grão-de-bico">Grão-de-bico</option>
                        <option value="Hortelã">Hortelã</option>
                        <option value="Iogurte">Iogurte</option>
                        <option value="Laranja">Laranja</option>
                        <option value="Leite">Leite</option>
                        <option value="Limão">Limão</option>
                        <option value="Macarrão">Macarrão</option>
                        <option value="Maçã">Maçã</option>
                        <option value="Manteiga">Manteiga</option>
                        <option value="Mel">Mel</option>
                        <option value="Melão">Melão</option>
                        <option value="Milho">Milho</option>
                        <option value="Mirtilo">Mirtilo</option>
                        <option value="Molho de tomate">Molho de tomate</option>
                        <option value="Mostarda">Mostarda</option>
                        <option value="Noz">Noz</option>
                        <option value="Oliveira">Oliveira</option>
                        <option value="Ovo">Ovo</option>
                        <option value="Pão">Pão</option>
                        <option value="Pepino">Pepino</option>
                        <option value="Pera">Pera</option>
                        <option value="Pimenta">Pimenta</option>
                        <option value="Pimentão">Pimentão</option>
                        <option value="Pinhão">Pinhão</option>
                        <option value="Pistache">Pistache</option>
                        <option value="Polpa de frutas">Polpa de frutas</option>
                        <option value="Presunto">Presunto</option>
                        <option value="Queijo">Queijo</option>
                        <option value="Rabanete">Rabanete</option>
                        <option value="Ricota">Ricota</option>
                        <option value="Romã">Romã</option>
                        <option value="Sal">Sal</option>
                        <option value="Salsicha">Salsicha</option>
                        <option value="Salsa">Salsa</option>
                        <option value="Sândwich">Sândwich</option>
                        <option value="Sorvete">Sorvete</option>
                        <option value="Tapioca">Tapioca</option>
                        <option value="Torta">Torta</option>
                        <option value="Uva">Uva</option>
                        <option value="Vinho">Vinho</option>
                        <option value="Yogurte">Yogurte</option>
                    </select>
                    <input type="number" placeholder="Gramas" style={{ width: 300 }} />
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