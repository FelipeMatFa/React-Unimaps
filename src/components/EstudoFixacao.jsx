import '../styles/EstudoFixacao.css'

function EstudoFixacao(){
    return(
        <main>
            <h2>ESTUDOS DE FIXAÇÃO</h2>
            <div className='main-primeira-div'>
                <section className='main-primeira-div_primeira-sessao'>
                    <p id='primeira-sessao_paragrafo'>Estátisticas de acertos</p>
                    <section className='primeira-sessao_estatisticas'>
                        <div className='primeira-sessao_estatisticas_div'>
                            <p id='primeira-sessao_div_paragrafo'>DIA 1</p>
                            <p id='primeira-sessao_div_nota'>15/21</p>
                        </div>
                        <div className='primeira-sessao_estatisticas_div'>
                            <p id='primeira-sessao_div_paragrafo'>DIA 2</p>
                            <p id='primeira-sessao_div_nota'>12/21</p>
                        </div>
                        <div className='primeira-sessao_estatisticas_div'>
                            <p id='primeira-sessao_div_paragrafo'>DIA 3</p>
                            <p id='primeira-sessao_div_nota'>19/21</p>
                        </div>
                        <div className='primeira-sessao_estatisticas_div'>
                            <p id='primeira-sessao_div_paragrafo'>DIA 4</p>
                            <p id='primeira-sessao_div_nota'>17/21</p>
                        </div>
                        <div className='primeira-sessao_estatisticas_div'>
                            <p id='primeira-sessao_div_paragrafo'>DIA 5</p>
                            <p id='primeira-sessao_div_nota'>21/21</p>
                        </div>
                    </section>
                </section>
                <section className='main-primeira-div_segunda-sessao'>
                    <p id='segunda-sessao_paragrafo'>Fazer treinamento</p>
                    <form className='formulario-treinamento'>
                        <input id='formulario-treinamento_conteudo' type="text" placeholder="Sobre qual conteúdo?"/>
                        <input id='formulario-treinamento_tempo' type="text" placeholder="Quanto tempo?"/>
                        <input id='formulario-treinamento_submeter' type="submit"/>
                    </form>
                </section>
                <section className='main-primeira-div_terceira-sessao'>
                    <p id='terceira-sessao_paragrafo'>Ultimos estudos</p>
                    <div className='terceira-sessao_primeira-div'>
                        <section className='terceira-sessao_primeira-div_sessao-ultimos-estudos'>
                            <div className='primeira-div_sessao-ultimos-estudos_nota'>
                                <p>Fisica quantica</p>
                                <p>Acertos: 14</p>
                            </div>
                            <p id='primeira-div_sessao-ultimos-estudos_mencao'>ED</p>
                        </section>
                        <section className='terceira-sessao_primeira-div_sessao-ultimos-estudos'>
                            <div className='primeira-div_sessao-ultimos-estudos_nota'>
                                <p>Fisica quantica</p>
                                <p>Acertos: 18</p>
                            </div>
                            <p id='primeira-div_sessao-ultimos-estudos_mencao'>ED</p>
                        </section>
                        <section className='terceira-sessao_primeira-div_sessao-ultimos-estudos'>
                            <div className='primeira-div_sessao-ultimos-estudos_nota'>
                                <p>Fisica quantica</p>
                                <p>Acertos: 21</p>
                            </div>
                            <p id='primeira-div_sessao-ultimos-estudos_mencao'>PD</p>
                        </section>
                        
                    </div>
                </section>
            </div>
        </main>
    )
}

export default EstudoFixacao;