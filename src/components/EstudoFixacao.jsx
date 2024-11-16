import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/EstudoFixacao.css'

function EstudoFixacao(){
    const navigate = useNavigate();
    const location = useLocation();

    const [conteudo, setConteudo] = useState("")
    const [tempo, setTempo] = useState("")
    const [estatisticas, setEstatisticas] = useState([]);

    const treinamento = (e) => {
        e.preventDefault();
        navigate('/chat/treinamento', {
            state: {conteudo, tempo}
        });
    };

    useEffect(() => {
        const getEstatisticas = async () => {
            const id = sessionStorage.getItem('id')
            try {
                const response = await axios.post(`http://localhost:3001/api/estatisticas`, {id});
                
                if (response.data.success){
                    setEstatisticas(response.data.data);
                    console.log(response.data.data)
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("Erro ao carregar conteúdo:", error);
                alert("Ocorreu um erro ao tentar carregar os dados.");
            }
        };

        getEstatisticas();
    }, []);

    return(
        <main className='main-chat'>
            <h2>ESTUDOS DE FIXAÇÃO</h2>
            <div className='main-primeira-div'>
                <section className='main-primeira-div_primeira-sessao'>
                    <p id='primeira-sessao_paragrafo'>Estatísticas de acertos</p>
                    {estatisticas.length === 0 ? (
                        <p>Não há estatísticas disponíveis, faça o treinamento abaixo para gerar dados.</p>
                    ) : (
                        <ul className='primeira-sessao_estatisticas'>
                            {estatisticas.map((estatistica) => (
                                <li className="primeira-sessao_estatisticas_div" key={estatistica.id}>
                                    <p id='primeira-sessao_div_paragrafo'>{estatistica.dia}</p>
                                    <p id='primeira-sessao_div_nota'>{estatistica.acertos}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>

                <section className='main-primeira-div_segunda-sessao'>
                    <p id='segunda-sessao_paragrafo'>Fazer treinamento</p>
                    <form className='formulario-treinamento' onSubmit={treinamento}>
                        <input 
                            id='formulario-treinamento_conteudo' 
                            type="text" 
                            placeholder="Sobre qual conteúdo?"
                            value={conteudo}
                            required
                            onChange={(e) => setConteudo(e.target.value)}
                        />
                        <input 
                            id='formulario-treinamento_tempo' 
                            type="number" 
                            placeholder="Quanto tempo?"
                            value={tempo}
                            required
                            onChange={(e) => setTempo(e.target.value)}
                        />
                        <input 
                            type="submit"
                        />
                    </form>
                </section>
                <section className='main-primeira-div_terceira-sessao'>
                    <p id='terceira-sessao_paragrafo'>Ultimos estudos</p>

                    <div className='terceira-sessao_primeira-div'>

                        {estatisticas.length === 0 ? (
                            <p>Não há estatísticas disponíveis, faça o treinamento abaixo para gerar dados.</p>
                        ) : (
                            <ul className='terceira-sessao_primeira-div_sessao-ultimos-estudos'>
                            {estatisticas.map((estatistica) => (
                                <li className="primeira-div_sessao-ultimos-estudos_nota" key={estatistica.id}>
                                    <div>
                                        <p>Acertos: {estatistica.acertos}</p>
                                    </div>
                                    <p id='primeira-div_sessao-ultimos-estudos_mencao'>{estatistica.mencao}</p>
                                </li>
                            ))}
                            </ul>
                        )}

                    </div>
                </section>
            </div>
        </main>
    )
}

export default EstudoFixacao;