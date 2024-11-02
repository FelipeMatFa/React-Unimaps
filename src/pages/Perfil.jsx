import Header from '../components/Header'
// import FormDadosUsuario from '../utils/FormDadosUsuario';
import '../styles/PerfilPage.css'

import ListarPosts from '../components/ListarPosts';
import ListarDados from '../components/ListarDados';

import PerfisComponent from '../components/PerfisComponent';

function Perfil(){
    return(
        <div>
            <Header></Header>
            <section className='main-usuario'>
                <ListarDados/>
                <PerfisComponent/>
                <hr/>
                <ListarPosts/>
            </section>
            
        </div>
        
    )
}

export default Perfil;