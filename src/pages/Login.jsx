import '../styles/Login.css'
import Formulario from '../components/FormLogin'

function Login(){
    return(
        <div className='div-login'>
            <section className='div-login_boas-vindas'>
                <h1 id='texto-boas-vindas'>Bem-vindo(a) de volta!</h1>
                <p id='texto-mensagem'>Você pode se logar com a sua contato cadastrada</p>
            </section>
            <Formulario/>
        </div>
    )
}
export default Login;