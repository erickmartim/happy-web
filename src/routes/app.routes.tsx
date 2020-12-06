import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import OrphanagesMap from 'pages/orphanage/OrphanagesMap';
import Orphanage from 'pages/orphanage/Orphanage';
import CreateOrphanage from 'pages/orphanage/CreateOrphanage';

import Login from 'pages/login/Index';
import MessagesComponent from 'components/layout/MessagesComponent';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact></Route>
        <Route path="/app" component={OrphanagesMap}></Route>

        <Route path="/orphanages/create" component={CreateOrphanage}></Route>
        <Route path="/orphanages/:id" component={Orphanage}></Route>

        <Route path="/login" component={Login}></Route>
      </Switch>

      <MessagesComponent />
    </BrowserRouter>
  );
}