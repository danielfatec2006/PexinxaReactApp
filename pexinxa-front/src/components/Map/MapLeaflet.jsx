import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrigir ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mercados com coordenadas e promoções
const mercados = [
  {
    lat: -21.5974507,
    lng: -48.3699861,
    name: 'Supermercado Amarelinha',
    promocoes: ['Leite 20% off', 'Frutas 15% off'],
  },
  {
    lat: -21.6015665,
    lng: -48.3615659,
    name: 'Supermercado Savegnago',
    promocoes: ['Pão 10% off', 'Queijo 25% off'],
  },
  {
    lat: -21.5910102,
    lng: -48.3750284,
    name: 'Supermercado Simoni',
    promocoes: ['Pão 10% off', 'Queijo 25% off'],
  },
  {
    lat: -21.6015716,
    lng: -48.3559906,
    name: 'Tenda Atacado',
    promocoes: ['Pão 10% off', 'Queijo 25% off'],
  },

  {
    lat: -21.6195254,
    lng: -48.3593878,
    name: 'Supermercado Amarelinha',
    promocoes: ['Pão 10% off', 'Queijo 25% off'],
  },
];

const MapLeaflet = () => {
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: -21.6176956, lng: -48.3601206 });

  useEffect(() => {
    // Obter localização do usuário (Geolocalização)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        }
      );
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '300px', padding: '20px'}}>
      <MapContainer 
        center={[userLocation.lat, userLocation.lng]} 
        zoom={16} 
        style={{ width: '100%', height: '100%'}}
        doubleClickZoom={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
        />

        {/* Marcador do Usuário */}
        <Marker position={[userLocation.lat, userLocation.lng]}>
          <Popup>
            <b>Sua Localização</b>
          </Popup>
        </Marker>

        {/* Marcadores dos Mercados */}
        {mercados.map((market) => (
          <Marker
            key={market.name}
            position={[market.lat, market.lng]}
            eventHandlers={{
              click: () => setSelectedMarket(market),
            }}
          >
            {selectedMarket?.name === market.name && (
              <Popup
                position={[selectedMarket.lat, selectedMarket.lng]}
                onClose={() => setSelectedMarket(null)}
              >
                <div>
                  <h3>{selectedMarket.name}</h3>
                  <ul>
                    {selectedMarket.promocoes.map((promocao, index) => (
                      <li key={index}>{promocao}</li>
                    ))}
                  </ul>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;