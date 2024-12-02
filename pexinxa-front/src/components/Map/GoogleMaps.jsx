import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

//alguns recursos requer o pagamento na api do google apis
//portanto fiz até onde pude

const containerStyle = {
    width: '100%',
    height: '500px',
  };

const center = {
    lat: -23.5505,
    lng: -46.6333,
};

const mercados = [
    {
      lat: -23.5505,
      lng: -46.6333,
      name: 'Mercado A',
      promocoes: ['Leite 20% off', 'Frutas 15% off'],
    },
    {
      lat: -23.5605,
      lng: -46.6433,
      name: 'Mercado B',
      promocoes: ['Pão 10% off', 'Queijo 25% off'],
    },
    
  ];

const GoogleMaps = () => {

  const [map, setMap] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps: {loadError.message}</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={(map) => setMap(map)}
      >
        {mercados.map((market) => (
          <Marker
            key={market.name}
            position={{ lat: market.lat, lng: market.lng }}
            onClick={() => setSelectedMarket(market)}
          />
        ))}

        {selectedMarket && (
          <InfoWindow
            position={{ lat: selectedMarket.lat, lng: selectedMarket.lng }}
            onCloseClick={() => setSelectedMarket(null)}
          >
            <div>
              <h3>{selectedMarket.name}</h3>
              <ul>
                {selectedMarket.promocoes.map((promocao) => (
                  <li key={promocao}>{promocao}</li>
                ))}
              </ul>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default GoogleMaps;