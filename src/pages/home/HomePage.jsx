import Header from '../../components/Header'
import "../../styles/Home.css"

import Images from '../../assets/image'

function HomePage(){
    return(
        <div>
            <Header></Header>
            <h1 id="main_paragrafo">Bem-vindo {sessionStorage.getItem('userName')}!</h1>
            <section className='main_navegacao'>
                <a className='main_navegacao_atalhos' href='home/perfil'>
                    <img src={Images.userIco} alt="" />
                    <p>SEU PERFIL</p>
                </a>
                <a className='main_navegacao_atalhos' href='home/dicas'>
                    <img src={Images.infoIco} alt="" />
                    <p>DICAS</p>
                </a>
                <a className='main_navegacao_atalhos' href='./tarefas'>
                    <img src={Images.tarefasIco} alt="" />
                    <p>TAREFAS</p>
                </a>
                <a className='main_navegacao_atalhos' href='home/informacoes'>
                    <img src={Images.infoIco} alt="" />
                    <p>INFORMAÇÕES</p>
                </a>
            </section>
        </div>
    )
}

export default HomePage;