import Header from '../components/Header'
import ListaProvas from '../components/ListaProvas'
import '../styles/Enem.css'

function EnemPage(){
    return(
        <div className="fundo">
            <Header></Header>
            <ListaProvas />
        </div>
        
    )
}

export default EnemPage;