// Bibliotecas externas
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";

// CSS
import '../styles/componenteMapa.css'

// Components
import ListarMarcadores from './ListarMarcadores';
import Modal from '../utils/Modal';

// Main component
const MyMap = ({ position, loading }) => {
  const getMarcadores = async () => {
    try {
      const id = parseInt(sessionStorage.getItem('id'));
      const response = await axios.get(`http://localhost:3001/api/listarLugaresMapa?id=${id}`);
      if (response.data.success) {
        console.log(response.data.data);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Erro ao carregar conteúdo:", error);
      alert("Ocorreu um erro ao carregar os marcadores.");
    }
  };

  if (loading) {
    return <div style={
      {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>Carregando mapa...</div>;
  }

  return (
    <div className='primeira-div_mapa'>
      <MapContainer className="Mapa" center={position} zoom={13}>
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
              shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
              iconSize: [25, 41],
              iconAnchor: [12, 41]
            })
          }
        >
          <Popup>
            Sua localização
          </Popup>
        </Marker>
      </MapContainer>

      <section className='primeira-div_mapa_primeira-sessao'>
        <h1>Meus Marcadores</h1>
        <ListarMarcadores/>
        <Modal/>
      </section>
    </div>
  );
};

export default MyMap;
