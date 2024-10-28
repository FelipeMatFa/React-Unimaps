import Logo from '../assets/logo-unimaps.png';
import Userico from '../assets/user-ico.png';
import { useNavigate } from "react-router-dom";
import '../styles/Header.css';

function Header() {
    const navigate = useNavigate();

    const visualizarPerfil = () => {
        navigate("/home/perfil");
    };

    return (
        <header>
            <div className='header-primeira-div'>
                <img id="header-primeira-div_logo" src={Logo} alt="Logo Unimaps" />
                <p id="header-primeira-div_titulo">Unimaps</p>
            </div>

            <div className='header-segunda-div'>
                <a href="/home">HOME</a>
                <a href="/mapa">MAPAS</a>
                <a href='/enem'>ENEM</a>
                <a href="">ATIVIDADES</a>
                <a href="/chat">CHAT IA</a>
                <img 
                    id="header-segunda-div_icone-user" 
                    src={Userico} 
                    alt="Ícone do perfil" 
                    onClick={visualizarPerfil}
                />
            </div>
        </header>
    );
}

export default Header;
