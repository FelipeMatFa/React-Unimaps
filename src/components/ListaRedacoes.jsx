import redacoes from '../assets/pdf/index';
import '../styles/ListaRedacoes.css'

function ListaRedacoes() {
    const redacoesArray = Object.values(redacoes);

    // const visualizarRedacao = (id_marcador) => {
    //     navigate(`/mapa/marcador?id=${id_marcador}`);
    // };

    return (
        <ul className="Redacoes">
            <h1 id='titulo'>Provas do ENEM</h1>
            {redacoesArray.map((redacao, index) => (
                <a className="Redacoes_div" key={index} href='/mapa'>
                    <p>Arquivo ENEM - {2023-index}</p>
                    {/* <embed src={redacao} /> */}
                </a>
            ))}
        </ul>
    );
}

export default ListaRedacoes;
