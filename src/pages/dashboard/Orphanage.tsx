import React from 'react';
import { Map, Marker, TileLayer } from "react-leaflet";
import mapIcon from "utils/mapIcon";

import { AiFillEdit } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

import 'styles/pages/dashboard/orphanage-thumbnails.scss';
import useMessages from 'common/hooks/useMessages';
import { Link } from 'react-router-dom';

interface OrphanageProps {
  id: number;
  name: string;
  pendingApproval: boolean;
}

export default function Orphanage(props: OrphanageProps) {
  const {name, id, pendingApproval} = props;
  const { addMessage, removeMessage } = useMessages();

  function handleDeleteOrphanage() {
    addMessage({
      title: "Atenção!",
      text: `Você tem certeza que quer excluir ${name}?`,
      type: 'warning',
      action: (
        <div>
          <Link to="/app" className="btn btn-messages-success btn-borderless" onClick={removeMessage}>Voltar ao Mapa</Link>
        </div>
      )
    });
  }

  return (
    <div className="orphanage">
      <div className="orphanage-header">
        <div className="map-container">
          <Map 
            center={[-23.4963243, -46.6222736]} 
            zoom={16} 
            style={{ width: '100%', height: 227 }}
            dragging={false}
            touchZoom={false}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
          >
            <TileLayer 
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
            <Marker interactive={false} icon={mapIcon} position={[-23.4963243,-46.6222736]}  />
          </Map>
        </div>
      </div>
      <div className="orphanage-description">
        <h2>{name}</h2>
          {!pendingApproval && (
            <div className="orphanage-actions">
              <button type="button" className="btn btn-borderless btn-gray">
                <AiFillEdit size={24}></AiFillEdit>
              </button>
              <button type="button" className="btn btn-borderless btn-gray" onClick={handleDeleteOrphanage}>
                <BiTrashAlt size={24}></BiTrashAlt>
              </button>
            </div>
          )}
          {pendingApproval && (
            <div className="orphanage-actions">
              <button type="button" className="btn btn-borderless btn-gray">
                <FaArrowRight size={24}></FaArrowRight>
              </button>
            </div>
          )}
      </div>
    </div>
  )
}