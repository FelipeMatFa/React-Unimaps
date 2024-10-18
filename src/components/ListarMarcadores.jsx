import { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/ListarMarcadores.css';
import Images from '../assets/image';

function ListarMarcadores() {
    const [Lugares, setLugares] = useState([]);

    const excluirMarcador = async (id_marcador) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/excluirMarcador?id=${id_marcador}`);
            if (response.data.success) {
                console.log(response.data.success);
                setLugares(Lugares.filter(lugar => lugar.id !== id_marcador));
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Erro ao excluir o marcador: " + error);
        }
    };

    useEffect(() => {
        const getMarcadores = async () => {
            try {
                let id = parseInt(sessionStorage.getItem('id'));
                const response = await axios.get(`http://localhost:3001/api/listarLugaresMapa?id=${id}`);
                
                if (response.data.success) {
                    console.log(response.data.data);
                    setLugares(response.data.data);
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
                    <img src={Images.fotoPerfil} id="marcadores_listados-img" alt="" />
                    <section className="marcadores_listados_conteudo">
                        <p id="marcadores_listados_conteudo_titulo">{lugar.titulo}</p>
                        <p id="marcadores_listados_conteudo_descricao">{lugar.descricao}</p>   
                    </section>
                    <button 
                        id="marcadores_listados_botao"
                        onClick={() => excluirMarcador(lugar.id)}    
                    >X</button>
                </div>
            ))}
        </ul>
    );
}

export default ListarMarcadores;
