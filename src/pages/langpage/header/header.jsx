import { useNavigate } from 'react-router-dom';
import icoLogo from '../../../assets/ico-logo.png'
import '../../../styles/landingpage/header.css'

function Header(){
    const navegate = useNavigate();

    const handleLoginClick = () => {
        navegate('/login');
    }
    const handleCadastroClick = () => {
        navegate('/cadastro');
    }

    return(
        <div className='header-div-cabecalho'>
            <section className='cabecalho_primeira-sessao'>
                <img src={icoLogo} alt="" />
                <h1>Unimaps</h1>
            </section>

            <section className='cabecalho_segunda-sessao'>
                <button 
                    id='segunda-sessao_button-login'
                    onClick={handleLoginClick}
                >Fazer Login</button>

                <button 
                    id='segunda-sessao_button-cadastro'
                    onClick={handleCadastroClick}
                >Cadastrar-se</button>
            </section>
        </div>
    )
}

export default Header;