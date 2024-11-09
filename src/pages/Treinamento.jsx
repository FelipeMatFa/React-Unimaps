import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

// CSS
import '../styles/treinamento.css';

function Treinamento() {
    const location = useLocation();
    const { conteudo, tempo } = location.state || {};

    const [questoes, setQuestoes] = useState([]);
    const [timer, setTimer] = useState(tempo * 60);
    const [respostas, setRespostas] = useState({});  // Armazena as respostas do usuário

    const [perguntas, setPerguntas] = useState([]);

    useEffect(() => {
        getChat();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);     
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, []);

    const getChat = async () => {
        try {
            let prompt = `Faça 5 questões sobre este conteúdo para treinar questões de enem e com opção a,b,c,d,e e que não precisem de imagem para entender: ${conteudo}`;
            const response = await axios.post('http://localhost:3001/api/chat', { prompt });
            
            // Pergunta do chat p/verificação
            setPerguntas(
                response.data.data
            );
            
            if (response.data.success) {
                const questoesArray = response.data.data.split(/(?=Questão \d+:)/g)
                    .map(questao => {
                        const questaoTexto = questao.replace(/\*\*/g, '').trim();
                        const match = questaoTexto.match(/(Questão \d+):\s*(.*?)(?=\(A\))/s);
                        if (match) {
                            const numeroQuestao = match[1].trim();
                            const enunciado = match[2].trim();
                            const opcoes = questaoTexto.match(/\([A-E]\)\s*[^()]+/g).map(opcao => opcao.trim());

                            return {
                                numeroQuestao,
                                enunciado,
                                opcoes
                            };
                        } else {
                            return null;
                        }
                    })
                    .filter(questao => questao);

                setQuestoes(questoesArray);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Erro ao carregar conteúdo:", error);
            alert("Ocorreu um erro ao tentar carregar os dados."); 
        }
    };

    const postRespostasChat = async () => {
        try {
            if (Array.isArray(perguntas) && perguntas.length > 0) {
                const data = {
                    pergunta: perguntas.map(questao => questao.enunciado).join(' '),
                    resposta: Object.values(respostas).join(' ')
                };
    
                const response = await axios.post('http://localhost:3001/api/chat/resposta', data);
                
                if (response.data.success) {
                    alert(response.data.message);  // Exibe o texto da resposta gerada
                } else {
                    alert(response.data.message);
                }
            } else {
                console.error("Formato de perguntas inválido");
                alert("Erro ao processar as perguntas");
            }
        } catch (error) {
            console.error("Erro ao enviar as respostas:", error);
            alert("Ocorreu um erro ao tentar enviar as respostas.");
        }
    };    

    const handleRespostaChange = (questaoIndex, respostaSelecionada) => {
        // Atualiza a resposta selecionada para a questão específica
        setRespostas(prevRespostas => ({
            ...prevRespostas,
            [questaoIndex]: respostaSelecionada
        }));
    };

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return (
        <div>
            <Header />
            {conteudo && tempo ? (
                <div className='treinamento-main-conteudo'>
                    <h1 id="main-conteudo_titulo">Treinamento</h1>
                    <p id="main-conteudo_primeiro-paragrafo"><strong>Conteúdo:</strong> {conteudo}</p>
                    <p id="main-conteudo_segundo-paragrafo"><strong>Tempo:</strong> {minutes}m {seconds}s</p>

                    <ul>
                        {Array.isArray(questoes) && questoes.length > 0 ? (
                            questoes.map((questao, index) => (
                                <li key={index} className="questao-item">
                                    <h3>{questao.numeroQuestao}</h3>
                                    <p>{questao.enunciado}</p>
                                    <form>
                                        {questao.opcoes.map((opcao, idx) => (
                                            <div key={idx} className="opcao-item">
                                                <label>
                                                    <input 
                                                        type="radio" 
                                                        name={`questao-${index}`} 
                                                        value={opcao} 
                                                        checked={respostas[index] === opcao}  // Marca a opção se for a resposta selecionada
                                                        onChange={() => handleRespostaChange(index, opcao)}  // Atualiza a resposta
                                                    />
                                                    {opcao}
                                                </label>
                                            </div>
                                        ))}
                                    </form>
                                </li>
                            ))
                        ) : (
                            <p>Nenhuma questão encontrada.</p>
                        )}
                    </ul>

                    <button onClick={postRespostasChat}>Ver Respostas</button> {/* Para mostrar as respostas selecionadas */}

                </div>
            ) : (
                <p>Não foi possível carregar a página</p>
            )}
        </div>
    );
}

export default Treinamento;
