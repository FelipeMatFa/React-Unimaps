import Header from '../../components/Header'
import FormDadosUsuario from '../../utils/FormDadosUsuario';
import '../../styles/PerfilPage.css'
import Images from '../../assets/image'

function PerfilPage(){
    return(
        <div>
            <Header></Header>
            <div className='Div-dados-cadastro'>

                <section className='Div-dados-cadastro_primeira-sessao'>
                    <p id='primeira-sessao_titulo'>Dados do cadastro</p>
                    <div className='primeira-sessao_primeira-div'>
                        <p>Foto perfil</p>
                        <img 
                            id='imagem-foto-perfil'
                            src={Images.fotoPerfil} 
                            alt="" 
                        />
                        <button>Upload de foto</button>
                    </div>
                </section>

                <FormDadosUsuario></FormDadosUsuario>
            </div>
        </div>
        
    )
}

export default PerfilPage;