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
<<<<<<< HEAD
            <section className='main-usuario'>
                <ListarDados/>
                <PerfisComponent/>
                <hr/>
                <ListarPosts/>
            </section>
=======
            <main className='perfil-main'>
                <ListarDados/>

                <hr id='linha-divisoria'></hr>
                <ListarPosts/>
            </main>
>>>>>>> cea8667 (Página do chat com requisição das estatisticas)
            
        </div>
        
    )
}

export default Perfil;