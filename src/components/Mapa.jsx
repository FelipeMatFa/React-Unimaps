import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ButtonMarcadores from '../components/ButtonMarcadores';

const MyMap = () => {
  const [position, setPosition] = useState([50,50])
  const [loading, setLoading] = useState(true)

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
  },[]);

  if (loading) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <div>
      <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} style={{ backgroundColor: "red", width: "12px", height: "12px", borderRadius: "50%", border: "2px solid black"}}>
          <Popup>
            Sua localização
          </Popup>
        </Marker>
      </MapContainer>
      <ButtonMarcadores></ButtonMarcadores>
    </div>
  );
};

export default MyMap;
