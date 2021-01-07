import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Landing from 'pages/Landing';
import OrphanagesMap from 'pages/app/orphanage/OrphanagesMap';
import Orphanage from 'pages/app/orphanage/Orphanage';
import CreateOrphanage from 'pages/app/orphanage/CreateOrphanage';

import Login from 'pages/login';
import Messages from 'common/components/Messages';
import useAuth from 'common/hooks/useAuth';
import Dashboard from 'pages/dashboard';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }: any) {
  const { signed } = useAuth();

  console.log(signed);

  return (
    <Route
      {...rest}
      render={() =>
        signed ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}

export default function AppRoutes() {
  const { signed, loading } = useAuth();

  if(loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact></Route>
        <Route path="/app" component={OrphanagesMap}></Route>

        <Route path="/orphanages/create" component={CreateOrphanage}></Route>
        <Route path="/orphanages/:id" component={Orphanage}></Route>

        <Route 
          path="/login" 
          render={() =>
            signed ? (
              <Redirect
                to={{
                  pathname: "/dashboard"
                }}
              />
            ) : (
              <Login />
            )
          }>
        </Route>  

        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      </Switch>

      <Messages />
    </BrowserRouter>
  );
}