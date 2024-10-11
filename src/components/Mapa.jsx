import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importando axios
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ButtonMarcadores from '../components/ButtonMarcadores';
import ListarMarcadores from './ListarMarcadores';

import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css"

const MyMap = () => {
  const [position, setPosition] = useState([50, 50]);
  const [loading, setLoading] = useState(true);

  const getMarcadores = async (e) => {
    // e.preventDefault();
    try {
      let id = parseInt(sessionStorage.getItem('id'));
      const response = await axios.get(`http://localhost:3001/api/listarLugaresMapa?id=${id}`);
      if (response.data.success) {
        console.log(response.data.data);
        // handleCadastro();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Erro ao carregar conteúdo:", error);
      alert("Ocorreu um erro ao tentar fazer login.");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
          setLoading(false);
        },
        () => {
          alert('Não foi possível obter sua localização.');
          setLoading(false);
        }
      );
    } else {
      alert('Geolocalização não é suportada por este navegador.');
      setLoading(false);
    }

    getMarcadores();
  }, []);

  if (loading) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <div style={{display: "flex",flexDirection:"flex-row"}}>
      <MapContainer className="Mapa" center={position} zoom={13} style={{ height: "100vh", width: "70%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker 
          position={position}
          icon={
            new Icon({
              iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
              iconUrl: require("leaflet/dist/images/marker-icon.png"),
              shadowUrl: require("leaflet/dist/images/marker-shadow.png")
            })
          }
          >
          <Popup>
            Sua localização
          </Popup>
        </Marker>
        <ButtonMarcadores onClick={getMarcadores}>Enviar</ButtonMarcadores>
      </MapContainer>
      <section>
        <ListarMarcadores/>
      </section>
      
    </div>
  );
};

export default MyMap;
