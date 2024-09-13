import '../../../styles/landingpage/main.css'
import Images from '../../../assets/image'

function Main(){
    return(
        <main>
            <div className="main_primeira-div">
                <p>
                    Bem-vindo ao Unimaps.
                    O site feito para o estudante.
                </p>
                <p>
                    Com nossa plataforma você está no caminho certo para alcançar seu sucesso universitário
                </p>
            </div>
            <div className='main_segunda-div'>
                <p id='segunda-div_primeiro-paragrafo'>Conheça nossos recursos</p>
                <section className='segunda-div_sessao-recursos'>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <p 
                            id='conteudo_titulo'
                            >Estudo com IA
                        </p>
                        <p
                            id='conteudo_descricao'
                            >Uma maneira prática e nova de se estudar com pouco tempo.
                        </p>
                    </div>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <p 
                            id='conteudo_titulo'
                            >Conversa em grupo
                        </p>
                        <p
                            id='conteudo_descricao'
                            >Para aqueles que queiram conhecer novos lugares e pessoas.
                        </p>
                    </div>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <p 
                            id='conteudo_titulo'
                            >Faça suas anotações
                        </p>
                        <p
                            id='conteudo_descricao'
                            >Deixe tudo que você faz ou vai fazer registrado na nuvem.
                        </p>
                    </div>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <p 
                            id='conteudo_titulo'
                            >Faça suas anotações
                        </p>
                        <p
                            id='conteudo_descricao'
                            >Deixe tudo que você faz ou vai fazer registrado na nuvem.
                        </p>
                    </div>
                    <div className='sessao-recursos_conteudo'>
                        <img src={Images.imagemIA} alt="" />
                        <p 
                            id='conteudo_titulo'
                            >Faça suas anotações
                        </p>
                        <p
                            id='conteudo_descricao'
                            >Deixe tudo que você faz ou vai fazer registrado na nuvem.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main;