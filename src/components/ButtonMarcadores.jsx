function ButtonMarcadores({ titulo, descricao, localizacao, toggleModal }) {
    const adicionarMarcador = async (e) => {
        e.preventDefault();
        toggleModal();

        let latitude = localizacao[0];
        let longitude = localizacao[1];
        const id = sessionStorage.getItem('id');

        const data = { titulo, descricao, latitude, longitude, id };

        try {
            const response = await fetch('http://localhost:3001/api/marcarLugar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.success) {
                console.log('Sucesso');
            } else {
                alert('Ocorreu um erro ao adicionar marcador');
            }
        } catch (error) {
            console.log(error);
        }
};

    return (
        <button onClick={adicionarMarcador}>
            Adicionar lugar
        </button>
    );
}

export default ButtonMarcadores;
