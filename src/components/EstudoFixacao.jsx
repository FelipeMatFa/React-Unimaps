import '../styles/EstudoFixacao.css'

function EstudoFixacao(){
    return(
        <main>
            <h2>ESTUDOS DE FIXAÇÃO</h2>
            <div className='main-primeira-div'>
                <section className='main-primeira-div_primeira-sessao'>
                    <p>Estátisticas de acertos</p>
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
                <section>
                    <p>Fazer treinamento</p>
                    <div>
                        <input type="text" placeholder="Sobre qual conteúdo?"/>
                        <input type="text" placeholder="Quanto tempo?"/>
                        <input type="submit"/>
                    </div>
                </section>
                <section>
                    <p>Ultimos estudos</p>
                    <div>
                        <section>
                            <p>Fisica quantica</p>
                            <p>Acertos: 14</p>
                            <div>
                                <p>ED</p>
                            </div>
                        </section>
                        <section>
                            <p>Química orgânica</p>
                            <p>Acertos: 21</p>
                            <div>
                                <p>PD</p>
                            </div>
                        </section>
                        <section>
                            <p>Técnico para internet </p>
                            <p>Acertos: 21</p>
                            <div>
                                <p>PD</p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default EstudoFixacao;