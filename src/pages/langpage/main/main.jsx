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
                    <img id="primeira-sessao_img" alt=""/>
                </section>

                <section className='terceira-div_segunda-sessao'>
                    <p id="segunda-sessao_primeiro-paragrafo">Um site criado para ajudar os estudantes universitários em seus estudos</p>
                    <button id="segunda-sessao_botao-saiba-mais">Saiba mais</button>
                </section>
            </div>
        </main>
    )
}

export default Main;