import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

// CARREGANDO
import loading from '../assets/carregando.gif'

// CSS
import '../styles/treinamento.css';

function Treinamento() {
    let id_usuario = sessionStorage.getItem("id");

    const location = useLocation();
    const navigate = useNavigate();
    const { conteudo, tempo } = location.state || {};

    const [questoes, setQuestoes] = useState([]);
    const [timer, setTimer] = useState(tempo * 60);
    const [respostas, setRespostas] = useState({});
    const [perguntas, setPerguntas] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (Array.isArray(questoes) && questoes.length > 0) {
                setTimer((prevTimer) => prevTimer - 1);
            }
        }, 1000);

        const getChatInterval = setInterval(() => {
            if (Array.isArray(questoes) && questoes.length === 0) {
                getChat();
            }
        }, 10000);

        return () => {
            clearInterval(intervalId);
            clearInterval(getChatInterval);
        };
    }, [questoes, perguntas]);

    const getChat = async () => {
        try {
            let prompt = `Faça 15 questões sobre este conteúdo para treinar questões de enem e com opção A,B,C,D,E e que não precisem de imagem para entender e também mande as perguntas com "Questão 1,2,3 ou 4 etc" e as opções A,B,C,D e E: ${conteudo}`;
            const response = await axios.post('http://localhost:3001/api/chat', { prompt });

            setPerguntas(response.data.data);

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

                console.log("Questoes:", questoesArray);
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
            if (Array.isArray(questoes) && questoes.length > 0) {
                const data = {
                    pergunta: questoes.map(questao => questao.enunciado).join(' '),
                    opcoes: questoes.map(questao => questao.opcoes).join(' '),
                    resposta: Object.values(respostas).join(' ')
                };
    
                const response = await axios.post('http://localhost:3001/api/chat/resposta', data);
                const respostaTexto = response.data.data;
    
                console.log("Texto da resposta:", respostaTexto);
    
                // Atualização no regex para capturar "X/5" ou "0X/05"
                const acertosMatch = respostaTexto.match(/Número de acertos:\s*(\d+\/\d+)/);
                const acertos = acertosMatch ? acertosMatch[1] : "N/A";
    
                console.log(`Acertos encontrados: ${acertos}`);

                let acertosA;
                let novaMencao = acertos.match(/(\d+)\/\d+/);
                const novaMencaoNumero = novaMencao ? parseInt(novaMencao[1], 10) : null;

                if (novaMencaoNumero === 15) {
                    acertosA = "PD";
                } else if (novaMencaoNumero >= 7 && novaMencaoNumero <= 14) {
                    acertosA = "ED";
                } else if (novaMencaoNumero >= 0 && novaMencaoNumero <= 6) {
                    acertosA = "ND";
                } else {
                    acertosA = "Indeterminado"; // Tratamento de casos inesperados
                }

                console.log("Nova Menção:", novaMencaoNumero, "AcertosA:", acertosA);
    
                const enviarAcerto = await axios.post('http://localhost:3001/api/chat/enviaracerto', { acertos, acertosA, id_usuario });
    
                if (enviarAcerto.data.success) {
                    console.log("Sucesso!");
                } else {
                    console.log("Erro ao salvar seus dados de acerto");
                }
    
                if (response.data.success) {
                    alert(`Acertos: ${acertos}`);
                    navigate('/chat');
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
                                                        checked={respostas[index] === opcao}  
                                                        onChange={() => handleRespostaChange(index, opcao)}  
                                                    />
                                                    {opcao}
                                                </label>
                                            </div>
                                        ))}
                                    </form>
                                </li>
                            ))
                        ) : (
                            <img src={loading} alt="" />
                        )}
                    </ul>

                    <button id="botao-submit" onClick={postRespostasChat}>Responder</button>

                </div>
            ) : (
                <p>Não foi possível carregar a página</p>
            )}
        </div>
    );
}

export default Treinamento;
