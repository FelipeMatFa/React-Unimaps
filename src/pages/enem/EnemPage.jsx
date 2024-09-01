import Header from '../../components/Header'
import Enem2023 from '../../assets/pdf/enem2023.pdf'



function EnemPage(){
    return(
        <div>
            <Header></Header>
            <embed src={Enem2023} type="application/pdf" width="1920px" height="830px" />
            {/* Colocar opição ver resultados = gabarito da prova do enem */}
        </div>
        
    )
}

export default EnemPage;