import '../../../styles/landingpage/main.css'
import Images from '../../../assets/image'

function Main(){
    return(
        <main>
            <div className="main_primeira-div">
                <p id="primeira-div_primeiro-paragrafo">
                    Bem-vindo ao Unimaps.
                    <br></br>O site feito para o estudante.
                </p>
                <p id='primeira-div_segundo-paragrafo'>
                    Com nossa plataforma você está no caminho certo para alcançar seu sucesso universitário
                </p>
            </div>
            <div className='main_segunda-div'>
                <p id='segunda-div_primeiro-paragrafo'>Conheça nossos recursos</p>
                <section className='segunda-div_sessao-recursos'>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <section className='conteudo-informacoes'>
                            <p 
                                id='conteudo_titulo'
                                >Estudo com IA
                            </p>
                            <p
                                id='conteudo_descricao'
                                >Uma maneira prática e nova de se estudar com pouco tempo.
                            </p>
                        </section>
                    </div>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <section className='conteudo-informacoes'>
                            <p 
                                id='conteudo_titulo'
                                >Crie prazos
                            </p>
                            <p
                                id='conteudo_descricao'
                                >Adicione tarefas e prazos para começar a se organizar
                            </p>
                        </section>
                    </div>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <section className='conteudo-informacoes'>
                            <p 
                                id='conteudo_titulo'
                                >Faça suas anotações
                            </p>
                            <p
                                id='conteudo_descricao'
                                >Deixe tudo que você faz ou vai fazer registrado na nuvem.
                            </p>
                        </section>
                    </div>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <section className='conteudo-informacoes'>
                            <p 
                                id='conteudo_titulo'
                                >Estudo com IA
                            </p>
                            <p
                                id='conteudo_descricao'
                                >Uma maneira prática e nova de se estudar com pouco tempo.
                            </p>
                        </section>
                    </div>
                </section>
            </div>

            <div className='main_terceira-div'>
                <section className='terceira-div_primeira-sessao'>
                    <img 
                        id="primeira-sessao_img" alt=""
                    />
                </section>

                <section className='terceira-div_segunda-sessao'>
                    <p 
                        id="segunda-sessao_primeiro-paragrafo">
                        Um site criado para ajudar os estudantes universitários em seus estudos
                    </p>
                    <button 
                        id="segunda-sessao_botao-saiba-mais">
                        Saiba mais
                    </button>
                </section>
            </div>

            <div className='main_quarta-div'>
                <p 
                    id='quarta-div_primeiro-paragrafo'>
                    Sobre nós
                </p>
                <section className='quarta-div_primeira-sessao'>
                    <div className='quarta-div_primeira-sessao_div'>
                        <img 
                            src={Images.handshake} alt="" 
                        />
                        <p 
                            id='quarta-div_primeira-sessao_div_titulo'>
                            Olá, somos o Unimaps
                        </p>
                        <p 
                            id='quarta-div_primeira-sessao_div_paragrafo'>
                            Um dos primeiros sites com Inteligência Artificial 
                            para auxílio à estudantes universitários.
                        </p>
                    </div>
                    <div className='quarta-div_primeira-sessao_div'>
                        <img 
                            src={Images.sede} alt="" 
                        />
                        <p 
                            id='quarta-div_primeira-sessao_div_titulo'>
                            Fundação
                        </p>
                        <p 
                            id='quarta-div_primeira-sessao_div_paragrafo'>
                            Foi criado na Unisinos - Universidade do Vale do Rio do Sinos, na Escola de Ensino Médio Senac. Patenteado e programado por Felipe Mattos de Farias.
                        </p>
                    </div>
                    <div className='quarta-div_primeira-sessao_div'>
                        <img 
                            src={Images.tecnologia} alt="" 
                        />
                        <p 
                            id='quarta-div_primeira-sessao_div_titulo'>
                            Técnologias
                        </p>
                        <p 
                            id='quarta-div_primeira-sessao_div_paragrafo'>
                            Para desenvolvimento da aplicação foi utilizado o React.js do javascript junto
                        </p>
                    </div>
                    <div className='quarta-div_primeira-sessao_div'>
                        <img 
                            src={Images.suporte} alt="" 
                        />
                        <p 
                            id='quarta-div_primeira-sessao_div_titulo'>
                            Suporte
                        </p>
                        <p 
                            id='quarta-div_primeira-sessao_div_paragrafo'>
                            Para desenvolvimento da aplicação foi utilizado o React.js do javascript junto
                        </p>
                    </div>
                </section>
            </div>

            <div className='main_quinta-div'>
                <section className='main_quinta-div_primeira-sessao'>
                    <p id='main_quinta-div_primeira-sessao_primeiro-paragrafo'>
                        Simples, objetivo e seguro
                    </p>
                    <p id='main_quinta-div_primeira-sessao_segundo-paragrafo'>
                        Aplicativo do
                        Unimaps
                    </p>
                    <p id='main_quinta-div_primeira-sessao_terceiro-paragrafo'>
                        Todos os benefícios de uma instituição financeira cooperativa na palma da sua mão. Conheça as funções do nosso aplicativo administrando suas transações com facilidade e rapidez.
                    </p>
                    <button>
                        Baixe agora
                    </button>
                </section>
                
                <section className='main_quinta-div_segunda-sessao'>
                    <img src={Images.telaInicial} alt="" />
                </section>

                <section className='main_quinta-div_terceira-sessao'>
                    <p>
                        Acesse sua conta quando e onde quiser.
                    </p>
                    <p>
                        Realize movimentações financeiras com agilidade, rapidez e segurança.
                    </p>
                    <p>
                        Investir com o Sicredi é contribuir para o desenvolvimento da sua região.
                    </p>
                </section>
            </div>
            
            <div className='main_sexta-div'>
                <section className='main_sexta-div_sessao-criador'>
                    <p 
                        id='main_sexta-div_sessao-criador_primeiro-paragrafo'
                    >
                        Quem criou?
                    </p>
                    <p
                        id='main_sexta-div_sessao-criador_segundo-paragrafo'
                    >
                        Felipe Mattos de Farias é um programador e estudante da escola de 
                        Ensino Médio do Senac RS da Unisinos.
                    </p>
                </section>
                <img 
                    src={Images.fotoCriador} 
                    alt="" 
                    id='main_sexta-div_sessao-criador_foto-criador'
                />
            </div>
        </main>
    )
}

export default Main;