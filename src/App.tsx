import React from 'react';
import MessagesProvider from 'common/providers/MessagesProvider';
import { AuthProvider } from 'common/providers/AuthProvider';
import AppRoutes from 'routes/app.routes';

import 'leaflet/dist/leaflet.css';
import 'styles/global.scss';

function App() {
  return (
    <AuthProvider>
    <MessagesProvider>
      <AppRoutes />
    </MessagesProvider>
    </AuthProvider>
  );
}

export default App;
