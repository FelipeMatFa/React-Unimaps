import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Header from '../components/Header';
import axios from 'axios';

function Treinamento() {
    const location = useLocation();
    const { conteudo, tempo } = location.state || {};

    const [ questoes, setQuestoes ] = useState([])
    const [timer, setTimer] = useState(tempo * 60);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1); 
        }, 1000);
        
        return () => clearInterval(intervalId);
      }, []);

    const getChat = async () => {
        let prompt = `Faça 5 questões sobre este conteúdo para treinar questões de enem: ${conteudo}`;
        try {
            const response = await axios.post('https://react-unimaps.vercel.app/api/chat', { prompt });
            if (response.data.success) {
                setQuestoes(response.data);
                console.log(questoes)
                console.log(response.data.data);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Erro ao carregar conteúdo:", error);
            alert("Ocorreu um erro ao tentar carregar os dados."); 
        }
    };
    
    
    return (
        <div>
            <Header></Header>
            <h1>Treinamento</h1>
            {conteudo && tempo ? (
                <div>
                    <p><strong>Conteúdo:</strong> {conteudo}</p>
                    <p><strong>Tempo:</strong> {timer}s</p>

                    <ul>
                        {questoes.map((questao) => (
                            <li key={questao.id}>
                                <p>{questao.dia}</p>
                                <p>{questao.acertos}</p>
                            </li>
                        ))}
                    </ul>
                    <button onClick={getChat}>AAA</button>
                </div>
            ) : (
                <p>Não foi possível recuperar os dados do treinamento.</p>
            )}
        </div>
    );
}

export default Treinamento;
