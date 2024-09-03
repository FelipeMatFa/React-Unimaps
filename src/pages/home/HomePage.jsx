import Header from '../../components/Header'
import imagens from '../../assets/user.png'
import "../../styles/Home.css"

function HomePage(){
    return(
        <div>
            <Header></Header>
            <h1 id="main_paragrafo">Bem-vindo {sessionStorage.getItem('user')}!</h1>
            <section className='main_navegacao'>
                <div className='main_navegacao_atalhos'>
                    <img src={imagens} alt="" />
                    <p>SEU PERFIL</p>
                </div>
                <div className='main_navegacao_atalhos'>
                    <img src={imagens} alt="" />
                    <p>DICAS</p>
                </div>
                <div className='main_navegacao_atalhos'>
                    <img src={imagens} alt="" />
                    <p>TAREFAS</p>
                </div>
                <div className='main_navegacao_atalhos'>
                    <img src={imagens} alt="" />
                    <p>INFORMAÇÕES</p>
                </div>
            </section>
        </div>
    )
}
export default HomePage;