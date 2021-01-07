import React from 'react';
import useAuth from 'common/hooks/useAuth';
import { RiShutDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import mapMarkerImg from 'images/MapMarker.svg';

import 'styles/components/sidebar.scss';

export default function Sidebar({children}: any) {
  const { signOut } = useAuth();
  
  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <div className="app-sidebar-actions">
        {children}
      </div>

      <footer>
        <button type="button" className="btn btn-borderless btn-dark-blue" onClick={signOut}>
          <RiShutDownLine size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  )
}