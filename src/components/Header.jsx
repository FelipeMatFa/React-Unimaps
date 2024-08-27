import Logo from '../assets/logo-unimaps.png'
import Userico from '../assets/user-ico.png'
import '../styles/Header.css'

function header(){
    return(
        <header>
            <div className='header-primeira-div'>
                <img id="header-primeira-div_logo" src={Logo} alt="" />
                <p id="header-primeira-div_titulo">Unimaps</p>
            </div>

            <div className='header-segunda-div'>
                <a href="">HOME</a>
                <a href="">MAPAS</a>
                <a href="">ESTUDO</a>
                <a href="">CHAT IA</a>
                <img id="header-segunda-div_icone-user" src={Userico} alt="Icone do perfil" />
            </div>
        </header>
    )
}

export default header;