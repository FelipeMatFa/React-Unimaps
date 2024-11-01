import Header from '../components/Header'
// import FormDadosUsuario from '../utils/FormDadosUsuario';
import '../styles/PerfilPage.css'

import ListarPosts from '../components/ListarPosts';
import ListarDados from '../components/ListarDados';

function Perfil(){
    return(
        <div>
            <Header></Header>
            <ListarDados/>

            {/* <tr></tr> */}
            <ListarPosts/>
        </div>
        
    )
}

export default Perfil;