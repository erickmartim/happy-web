import React from 'react';
import AppRoutes from 'routes/app.routes'

import 'leaflet/dist/leaflet.css';
import 'styles/global.scss';
import MessagesProvider from 'common/providers/MessagesProvider';

function App() {
  return (
    <MessagesProvider>
      <AppRoutes />
    </MessagesProvider>
  );
}

export default App;
