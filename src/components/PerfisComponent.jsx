import { React, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css'

function PerfisComponent() {
    const [Perfis, setPerfis] = useState([]);

    useEffect(() => {
        const getPerfis = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/consultarperfis`);
                
                if (response.data.success) {
                    setPerfis(response.data.data);
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("Erro ao carregar conteúdo:", error);
                alert("Ocorreu um erro ao tentar carregar os dados.");
            }
        };

        getPerfis();
    }, []);

    return (
        <div className='navegacao_perfis'>
            <ul className='lista_perfis'>
                {Perfis.map((perfil) => (
                    <li className="perfil_item" key={perfil.id}>
                        <img src={perfil.foto} className="perfil_imagem" alt="" />      
                        <p className="perfil_nome">{perfil.nome}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PerfisComponent;
