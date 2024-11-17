import axios from "axios";
import { useEffect, useState } from "react";
import ModalPerfil from "./ModalPerfil";

function ListarPosts() {
  const [usuario, setUsuario] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  let id = sessionStorage.getItem("id");

  useEffect(() => {
    const requisitarUsuario = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/consultaruser?id=${id}`);
        if (response.data.success) {
          console.log(response.data.data[0]);
          setUsuario(response.data.data[0]);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.log(error);
        alert("Erro ao requisitar posts.");
      }
    };

    requisitarUsuario();
  }, [id]);

  return (
    <div>
        <ul className="listar-usuario">
            <img
              id="posts-usuario_foto-perfil"
              src={usuario.foto || "default.jpg"}
              alt={usuario.nome || "Usuário"}
            />
            <div className="listar-usuario_dados">
              <p id="dados_nome">{usuario.nome || "Nome não disponível"}</p>
              <p>{usuario.email || "Email não disponível"}</p>

            </div>
            <div className="listar-usuario_botoes">
              <button id="botao-seguir">Seguir</button>
              <button id="botao-info" onClick={() => setIsModalOpen(true)}>
                  ...
              </button>
            </div>
        </ul>

        <ModalPerfil 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            usuario={usuario} 
        />
    </div>
  );
}

export default ListarPosts;
