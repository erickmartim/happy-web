import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import mapMarkerImg from 'images/MapMarker.svg';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from 'utils/mapIcon';
import api from 'services/api';

import 'styles/pages/orphanages/orphanages-map.scss';

interface Orphanage {
  id: number,
  name: string;
  latitude: number,
  longitude: number
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);

  return(
    <div id="page-map">
      <aside>
        <header>
          <Link to="/"><img src={mapMarkerImg} alt="Happy" /></Link>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map center={[-23.4963243,-46.6222736]} zoom={15} style={{ width: '100%', height: '100%' }}>
        
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        
        {orphanages.map(orphanage => {
          return (
            <Marker 
              position={[orphanage.latitude,orphanage.longitude]} 
              icon={mapIcon}
              key={orphanage.id}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF"></FiArrowRight>
                </Link>
              </Popup>
            </Marker>
          );
        })}

      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;