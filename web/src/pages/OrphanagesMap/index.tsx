import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet'

import MapMarker from '../../images/map-marker.svg';
import './styles.css';
import api from '../../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: MapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [initialPosition, setInicialPosition] = useState<[number, number]>([0, 0])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
      console.log(response.data)
    })
  }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInicialPosition([latitude, longitude]);
    })
  }, [])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarker} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Salto</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={initialPosition}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        
          {orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                  {orphanage.name}
                  <Link to={`orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF" />
                  </Link>
                </Popup>
              </Marker>
              )
            })}
      </Map>

      <Link to="orphanages/create" className="create-orphanage" >
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;