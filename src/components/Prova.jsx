import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import '../styles/Prova.css'

function VisualizarProva() {
    const navigate = useNavigate();
    const location = useLocation();
    const { prova, ano } = location.state || {};

    const voltar = () => {
        navigate('/enem');
    };

    return (
        <div>
            <Header />
            <button id="button-voltar" onClick={voltar}>
                Sair
            </button>
            <h1 id="h1-status">Visualizando Redação ENEM - {ano}</h1>
            {prova ? (
                <div className="embed-container">
                    <object data={prova} type="application/pdf" width="100%" height="100%">
                        <p>Seu navegador não suporta PDFs. <a href={prova}>Clique aqui para visualizar</a></p>
                    </object>
                </div>
            ) : (
                <p>Erro: Prova não encontrada.</p>
            )}
        </div>
    );
}

export default VisualizarProva;
