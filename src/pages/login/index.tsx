import React from 'react';
import {useHistory} from 'react-router-dom';
import ShortLocation from 'common/components/ShortLocation';

import LogoDashboard from 'images/LogoDashboard.svg';
import { FaArrowLeft } from 'react-icons/fa';

import 'styles/pages/login/login.scss';
import LoginRoutes from 'routes/login.routes';

export default function Login() {
  const history = useHistory();
  return (
    <div id="page-login" className="page-login">
      <div className="login-splash">
        <img src={LogoDashboard} alt="Dashboard" />
        <ShortLocation />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <LoginRoutes />
        </div>

        <button onClick={() => {history.push('/')}} className="btn btn-gray btn-borderless">
          <FaArrowLeft size={24} color="#15C3D6"/>
        </button>
      </div>
    </div>
  )
}