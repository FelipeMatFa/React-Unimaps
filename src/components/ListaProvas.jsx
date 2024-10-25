import { useNavigate } from 'react-router-dom';
import provas from '../assets/pdf/index';

function ListaProvas() {
    const navigate = useNavigate();
    const provasArray = Object.values(provas);

    const visualizarProva = (prova, ano) => {
        navigate('/enem/redacao', { state: { prova, ano } });
    };

    return (
        <ul className="Redacoes">
            <h1 id='titulo'>Provas do ENEM</h1>
            {provasArray.map((prova, index) => (
                <a className="Redacoes_div" key={index} onClick={() => visualizarProva(prova, 2023 - index)}>
                    <p>Arquivo ENEM - {2023 - index}</p>
                </a>
            ))}
        </ul>
    );
}

export default ListaProvas;