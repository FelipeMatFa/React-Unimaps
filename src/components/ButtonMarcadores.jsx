
function ButtonMarcadores(link){
    function executarAcao(){
        alert(link)
    }

    return(
        <button
            onClick={executarAcao}
        >
            Adicionar lugar
        </button>
    )
}

export default ButtonMarcadores;