import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

// CSS
import '../styles/treinamento.css';

function Treinamento() {
    let id = sessionStorage.getItem("id");

    const location = useLocation();
    const { conteudo, tempo } = location.state || {};

    const [mencao, setMencao] = useState("");

    const [questoes, setQuestoes] = useState([]);
    const [timer, setTimer] = useState(tempo * 60);
    const [respostas, setRespostas] = useState({});  // Armazena as respostas do usuário

    const [perguntas, setPerguntas] = useState([]);

    useEffect(() => {
        getChat();
    }, []);

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
            let prompt = `Faça 5 questões sobre este conteúdo para treinar questões de enem e com opção a,b,c,d,e e que não precisem de imagem para entender: ${conteudo}`;
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
    
                console.log("Questoes:", questoesArray);  // Verifique a estrutura das questões
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
                    resposta: Object.values(respostas).join(' ')
                };
    
                const response = await axios.post('http://localhost:3001/api/chat/resposta', data);
                const respostaTexto = response.data.data;
    
                console.log(respostaTexto)
                // Extrair o número de acertos no formato 0X/05, pois pode ser encontrado de 0 a 5 o número de acertos
                const acertosMatch = respostaTexto.match(/0[0-5]\/05/);
                // const acertosMateria = respostaTexto.match(/0[0-5]\/05/);
                const acertos = acertosMatch ? acertosMatch[0] : "N/A";

                if(acertos === "05/05"){
                    setMencao("PD")
                } else if(acertos === "00/05" || acertos === "01/05" || acertos === "02/05"){
                    setMencao("ND")
                } else if(acertos === "03/05" || acertos === "04/05"){
                    setMencao("ED")
                }

                const enviarAcerto = await axios.post('http://localhost:3001/api/chat/enviaracerto', { acertos, mencao, id });
                if (enviarAcerto.data.sucess){
                    console.log("Sucesso!")
                } else {
                    console.log("Erro ao salvar seus dados de acerto")
                }
    
                if (response.data.success) {
                    alert(`Acertos: ${acertos}`);
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