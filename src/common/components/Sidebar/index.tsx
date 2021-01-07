import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import mapMarkerImg from 'images/MapMarker.svg';

import 'styles/components/sidebar.scss';

export default function Sidebar({children}: any) {
  const { goBack } = useHistory();
  
  return (
    <aside className="app-sidebar">
      <Link to="/app">
        <img src={mapMarkerImg} alt="Happy" />
      </Link>

      {children}

      <footer>
        <button type="button" className="btn btn-borderless btn-dark-blue" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  )
}