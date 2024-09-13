import Header from '../../components/Header'
import "../../styles/Home.css"

import Images from '../../assets/image'

function HomePage(){
    return(
        <div>
            <Header></Header>
            <h1 id="main_paragrafo">Bem-vindo {sessionStorage.getItem('user')}!</h1>
            <section className='main_navegacao'>
                <div className='main_navegacao_atalhos'>
                    <img src={Images.userIco} alt="" />
                    <p>SEU PERFIL</p>
                </div>
                <div className='main_navegacao_atalhos'>
                    <img src={Images.infoIco} alt="" />
                    <p>DICAS</p>
                </div>
                <div className='main_navegacao_atalhos'>
                    <img src={Images.tarefasIco} alt="" />
                    <p>TAREFAS</p>
                </div>
                <div className='main_navegacao_atalhos'>
                    <img src={Images.infoIco} alt="" />
                    <p>INFORMAÇÕES</p>
                </div>
            </section>
        </div>
    )
}

export default HomePage;