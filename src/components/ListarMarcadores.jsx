import { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/ListarMarcadores.css'
import Images from '../assets/image'

function ListarMarcadores() {
    const [Lugares, setLugares] = useState([]);

    useEffect(() => {
        const getMarcadores = async () => {
            try {
                let id = parseInt(sessionStorage.getItem('id'));
                const response = await axios.get(`http://localhost:3001/api/listarLugaresMapa?id=${id}`);
                
                if (response.data.success) {
                    console.log(response.data.data);
                    setLugares(response.data.data); // Aqui você armazena os dados corretamente
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("Erro ao carregar conteúdo:", error);
                alert("Ocorreu um erro ao tentar carregar os dados.");
            }
        };

        getMarcadores();
    }, []);

    return (
        <ul className="marcadores">
            {Lugares.map(lugar => (
                <div className="marcadores_listados" key={lugar.id}>
                    <img src={Images.fotoPerfil} style={{height: "5vh"}} alt="" />
                    <section>
                        <p>{lugar.titulo}</p>
                        <p>{lugar.descricao}</p>
                    </section>
                </div>
            ))}
        </ul>

    );
}

export default ListarMarcadores;
