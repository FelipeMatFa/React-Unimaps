import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

function Treinamento() {
    const location = useLocation();
    const { conteudo, tempo } = location.state || {};

    const [questoes, setQuestoes] = useState([]);
    const [timer, setTimer] = useState(tempo * 60);

    useEffect(() => {
        getChat();
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);     
        }, 1000);
        
        return () => clearInterval(intervalId);
    }, []);

    const getChat = async () => {
        try {
            let prompt = `Faça 5 questões sobre este conteúdo para treinar questões de enem e com opção a,b,c,d,e e que não precisem de imagem para entender: ${conteudo}`;
            const response = await axios.post('http://localhost:3001/api/chat', { prompt });
            if (response.data.success) {
                const questoesArray = response.data.data.split('\n').filter(questao => questao.trim() !== '');
                setQuestoes(questoesArray);
                console.log(questoesArray); 
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Erro ao carregar conteúdo:", error);
            alert("Ocorreu um erro ao tentar carregar os dados."); 
        }
    };

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return (
        <div>
            <Header />
            {conteudo && tempo ? (
                <div className=''>
                    <h1>Treinamento</h1>
                    <p><strong>Conteúdo:</strong> {conteudo}</p>
                    <p><strong>Tempo:</strong> {minutes}m {seconds}s</p>

                    <ul>
                        {Array.isArray(questoes) && questoes.length > 0 ? (
                            questoes.map((questao, index) => (
                                <li key={index}>
                                    <p>{questao || "Questão não disponível"}</p>
                                </li>
                            ))
                        ) : (
                            <p>Nenhuma questão gerada.</p>
                        )}
                    </ul>
                </div>
            ) : (
                <p>Não foi possível recuperar os dados do treinamento.</p>
            )}
        </div>
    );
}

export default Treinamento;
