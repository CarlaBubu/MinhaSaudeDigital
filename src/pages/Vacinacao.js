import './PaginasMeusRegistros.css';

const Vacinacao = () => {
    return (
        <div className="registro-pacientes">
            <h1>OLÁ CAROLINA LOPES!</h1>
            <br />
            <h2>FLORIANÓPOLIS, 29 DE NOVEMBRO 2023</h2>
            <div className="minha-saude">
                <br />
                <p>VACINAÇÃO</p>
                <hr className="hr-linha" />
                <div className="input-container">
                    <select style={{ width: 320 }}>
                        <option value="">Tipo de vacina</option>
                        <option value="IGHT">Imunoglobulina humana antitétano</option>
                        <option value="SAT">Soro antitetânico</option>
                        <option value="SARC">Soro antiaracnídico</option>
                        <option value="SAESCOR">Soro antiescorpiônico</option>
                        <option value="DT">Vacina difteria e tétano infantil</option>
                        <option value="SAELAP">Soro antielapídico</option>
                        <option value="SAR">Soro antirrábico</option>
                        <option value="SABOTR">Soro antibotrópico (pentavalente)</option>
                        <option value="HepB">Vacina hepatite B</option>
                        <option value="SAD">Soro antidiftérico	</option>
                        <option value="SABOCR">Soro antibotrópico (pentavalente) e anticrotálico</option>
                        <option value="SABOLA">Soro antibotrópico (pentavalente) e antilaquético</option>
                        <option value="Meningo AC">Vacina meningocócica AC</option>
                        <option value="VFA">Vacina febre amarela</option>
                        <option value="BCG">Vacina BCG</option>
                        <option value="SACROT">Soro anticrotálico</option>
                        <option value="Hib">Vacina Hib</option>
                        <option value="VR">Vacina raiva embrião de galinha</option>
                        <option value="IGHV">Imunoglobulina humana antivaricela</option>
                        <option value="IGHHB">Imunoglobulina humana anti-hepatite B</option>
                        <option value="VPP23">Vacina pneumo 23</option>
                        <option value="VIP">Vacina polio injetável</option>
                        <option value="IGHR">Imunoglobulina humana antirrábica</option>
                        <option value="SCR">Vacina sarampo, caxumba, rubéola</option>
                        <option value="dT">Vacina difteria e tétano adulto</option>
                        <option value="VPC10">Vacina pneumo 10</option>
                        <option value="SLATRO">Soro latrodectus</option>
                        <option value="VOP">Vacina polio oral</option>
                        <option value="PENTA acelular">Vacina penta acelular (DTPa/VIP/Hib)</option>
                        <option value="FTp">Vacina febre tifóide</option>
                        <option value="SALOXO">Soro antiloxoscélico (trivalente)</option>
                        <option value="SALONO">Soro antilonômico</option>
                        <option value="INF3">Vacina influenza trivalente</option>
                        <option value="VAR">Vacina varicela</option>
                        <option value="HA">Vacina hepatite A</option>
                        <option value="SR">Vacina sarampo, rubéola</option>
                        <option value="Vero">Vacina raiva em cultivo celular vero</option>
                        <option value="SBOTULTRI">Soro antibotulínico (trivalente)</option>
                        <option value="Tetra">Vacina DTP/Hib</option>
                        <option value="Pncc7V">Vacina pneumocócica 7V</option>
                        <option value="MenC">Vacina meningo C</option>
                        <option value="PENTA">Vacina penta (DTP/HepB/Hib)</option>
                        <option value="HEXA">Vacina hexa (DTPa/HepB/VIP/Hib)</option>
                        <option value="H1N1">Vacina Influenza H1N1</option>
                        <option value="ROTA">Vacina rotavírus</option>
                        <option value="DTP">Vacina DTP</option>
                        <option value="DTPa">Vacina DTPa infantil</option>
                        <option value="DILSRC">Diluente para vacina sarampo, caxumba, rubéola</option>
                        <option value="DILVFA">Diluente para vacina febre amarela</option>
                        <option value="DILHib">Diluente para vacina haemophilus influenzae B</option>
                        <option value="Fta">Vacina febre tifóide (atenuada)</option>
                        <option value="DilMengAC">Diluente meningo AC</option>
                        <option value="DILSR">Diluente para vacina sarampo, rubéola</option>
                        <option value="DILVAR">Diluente para vacina varicela</option>
                        <option value="HepAinf">Vacina hepatite A infantil</option>
                        <option value="SCRV">Vacina sarampo, caxumba, rubéola e varicela</option>
                        <option value="dTpa">Vacina dTpa adulto</option>
                        <option value="TETRA acelular">Vacina DTPa/VIP</option>
                        <option value="VPC13">Vacina pneumo 13</option>
                        <option value="HPV2">Vacina HPV bivalente</option>
                        <option value="TT">Vacina toxóide tetânico</option>
                        <option value="HAeHBped">Hepatite AeB (pediátrica)</option>
                        <option value="HAeHB">Vacina hepatite AeB (uso adulto)</option>
                        <option value="FLU ID">Vacina influenza ID</option>
                        <option value="ROTA5">Vacina rotavírus pentavalente</option>
                        <option value="MEN BC">Vacina meningocócica B/C</option>
                        <option value="HPV4">Vacina HPV quadrivalente</option>
                        <option value="HPV Bi">Vacina HPV bivalente</option>
                        <option value="SABOT">Soro antibotulínico AB (bivalente)</option>
                        <option value="Sarampo">Vacina sarampo</option>
                        <option value="Rubeola">Vacina rubéola</option>
                        <option value="Gripe Sazonal">Vacina gripe</option>
                        <option value="Quadrupla Viral">Vacina quádrupla viral</option>
                        <option value="MenACWY">Vacina meningo ACWY</option>
                        <option value="COLERA">Vacina cólera</option>
                        <option value="VHZ">Vacina herpes-zóster</option>
                        <option value="INF4">Vacina influenza tetravalente</option>
                        <option value="MenB">Vacina meningo B</option>
                        <option value="DILBCG">Diluente para vacina BCG</option>
                        <option value="DILVRvero">Diluente para vacina raiva cultivo celulas vero</option>
                        <option value="DILMenC">Diluente para vacina meningo C</option>
                        <option value="Dengue">Vacina dengue</option>
                        <option value="HEPAad">Vacina hepatite A adulto</option>
                        <option value="VFA-F">Vacina febre amarela fracionada</option>
                        <option value="COVID-19 ASTRAZENECA/FIOCRUZ - COVISHIELD">Vacina COVID-19 ASTRAZENECA/FIOCRUZ - COVISHIELD, recombinante</option>
                        <option value="COVID-19 SINOVAC/BUTANTAN - CORONAVAC">Vacina COVID-19 SINOVAC/BUTANTAN - CORONAVAC, inativada</option>
                        <option value="COVID-19 PFIZER - COMIRNATY">Vacina COVID-19 PFIZER - COMIRNATY, RNAm</option>
                        <option value="COVID-19 JANSSEN - Ad26.COV2.S">Vacina COVID-19 JANSSEN - Ad26.COV2.S, recombinante</option>
                        <option value="COVID-19 ASTRAZENECA - ChAdOx1-S">Vacina COVID-19 ASTRAZENECA - ChAdOx1-S, recombinante</option>
                        <option value="DILSCRV">Diluente para vacina sarampo, caxumba, rubéola e varicela</option>
                        <option value="DILVR">Diluente para vacina raiva cultivo embrião de galinha</option>
                        <option value="VRvero">Vacina raiva cultivo celulas vero</option>
                        <option value="HPV9">Vacina HPV nonavalente</option>
                        <option value="DILCOV">Diluente COVID-19</option>
                        <option value="COVID-19 GAMALEYA - SPUTNIK V">Vacina COVID-19 GAMALEYA - SPUTNIK V recombinante</option>
                        <option value="COVID-19 BHARAT - COVAXIN">Vacina COVID-19 BHARAT - COVAXIN inativada</option>
                        <option value="COVID-19 MODERNA - SPIKEVAX">Vacina COVID-19-RNAm, Moderna (Spikevax)</option>
                        <option value="COVID-19 SINOVAC - CORONAVAC">Vacina COVID-19 SINOVAC - CORONAVAC inativada</option>
                        <option value="COVID-19 PFIZER - COMIRNATY PEDIÁTRICA">Vacina COVID-19 PFIZER - COMIRNATY PEDIÁTRICA, RNAm</option>
                        <option value="VVBN">Vacina Varíola Bavarian Nordic</option>
                        <option value="VZR">Vacina Herpes-Zoster, recombinante</option>
                        <option value="COVID-19 PFIZER - COMIRNATY PEDIÁTRICA MENOR DE 5 ANOS">Vacina COVID-19 PFIZER - COMIRNATY PEDIÁTRICA MENOR DE 5 ANOS, RNAm</option>
                        <option value="COVID-19 PFIZER - COMIRNATY BIVALENTE">Vacina COVID-19 PFIZER - COMIRNATY BIVALENTE, RNAm</option>
                        <option value="DNG">Vacina dengue (atenuada)</option>
                        <option value="COVID-19 MODERNA - SPIKEVAX BIVALENTE">Vacina COVID-19-RNAm, Moderna (Spikevax) bivalente</option>
                        <option value="VPC15">Vacina adsorvida pneumocócica 15-valente (conjugada, polissacarídica)</option>
                        <option value="VPC20">Vacina Pneumo 20</option>
                        <option value="VVSR-Rec">Vacina Vírus Sincicial Respiratório A e B (recombinante)</option>
                        <option value="VVSR-RecAdj">Vacina Vírus Sincicial Respiratório (recombinante, adjuvada)</option>
                        <option value="INF4-alta dosagem">Vacina Influenza Tetravalente - Alta Dosagem</option>
                    </select>
                    <input type="number" placeholder="Dose" style={{ width: 300 }} />
                    <input type="date" placeholder="Data" style={{ width: 300 }} />
                </div>
                <button>REGISTRAR</button>
                <br />
                <h4>HISTÓRICO</h4>
                <hr className="hr-linha" />
                <div className="historico-container">
                    <div className="historico-item">
                        <p>COVID - 4º DOSE: 05/10/2023<span>16/10/2023</span></p>
                    </div>
                    <hr />
                    <br />
                    <hr />
                    <br />
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Vacinacao;