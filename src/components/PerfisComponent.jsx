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
                    console.log(response.data.data);
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
        <div className='main_navegacao_perfis'>
            {Perfis.map(Perfil => (
                <div className="perfis_listados" key={Perfil.id}>
                    <img src={Perfil.foto} id="perfis_listados_img" alt="" />
                    <p id="perfis_listados_paragrafo">{Perfil.nome}</p>
                </div>
            ))}
        </div>
    );
}

export default PerfisComponent;
