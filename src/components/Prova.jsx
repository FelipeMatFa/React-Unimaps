import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function VisualizarProva() {
    const navigate = useNavigate();
    const location = useLocation();
    const { prova, ano } = location.state || {};

    const voltar = () => {
        navigate('/enem');
    };

    return (
        <div>
            <Header></Header>
            <button 
                id="button-voltar"
                onClick={voltar}
            >
                Sair
            </button>
            <h1>Visualizando Redação ENEM - {ano}</h1>
            {prova ? (
                <embed id="embed-da-prova" src={prova} type="application/pdf" />
            ) : (
                <p>Erro: Prova não encontrada.</p>
            )}
        </div>
    );
}

export default VisualizarProva;
