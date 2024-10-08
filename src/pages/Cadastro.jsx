import '../styles/Login.css'
import FormCadastro from "../components/FormCadastro";

function Cadastro(){
    return(
        <div className='div-login'>
            <section className='div-login_boas-vindas'>
                <h1 id='texto-boas-vindas'>Bem-vindo(a)!</h1>
                <p id='texto-mensagem'>Você pode se cadastrar com sua conta do google</p>
            </section>
            <FormCadastro></FormCadastro>
        </div>
    )
}

export default Cadastro;