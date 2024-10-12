function ButtonMarcadores({ titulo, descricao }) {
    const adicionarMarcador = async (e) => {
        e.preventDefault();

        // Usar a API de Geolocalização para obter as coordenadas
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
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
                    // recarregar();
                } else {
                    alert('Ocorreu um erro ao adicionar marcador');
                }
            } catch (error) {
                console.log(error);
            }
        }, (error) => {
            alert("Erro ao obter a localização: " + error.message);
        });
    };

    return (
        <button onClick={adicionarMarcador}>
            Adicionar lugar
        </button>
    );
}

export default ButtonMarcadores;
