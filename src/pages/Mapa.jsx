import MyMap from "../components/Mapa";
import Header from "../components/Header";
import { useState, useEffect } from "react";

function Mapa() {
  const [position, setPosition] = useState([50, 50]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <div>
      <Header/>
      <MyMap 
        position={position} 
        loading={loading}
      />
    </div>
  );
}

export default Mapa;
