import ForgotPasswordComponent from 'pages/login/ForgotPasswordComponent';
import LoginFormComponent from 'pages/login/LoginFormComponent';
import PasswordResetComponent from 'pages/login/PasswordResetComponent';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function LoginRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginFormComponent}></Route>
        <Route path="/login/forgot-password" component={ForgotPasswordComponent}></Route>
        <Route path="/login/reset-password" component={PasswordResetComponent}></Route>
      </Switch>
    </BrowserRouter>
  );
}