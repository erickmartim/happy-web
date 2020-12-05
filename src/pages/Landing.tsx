import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ShortLocationComponent from 'components/layout/ShortLocationComponent';

import logoImg from 'images/Logo.svg';
import 'styles/pages/landing.scss';

function Landing() {
  return (
    <div id="page-landing" className="page-landing">
      <div className="content-wrapper">
        <div className="page-landing-header">
          <img src={logoImg} alt="Happy"/>

          <ShortLocationComponent textAlign="left" />

          <Link to="/login" className="btn btn-secondary btn-borderless btn-login">
            Acesso Restrito
          </Link>
        </div>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia
de muitas crianças.</p>
        </main>

        <Link to="/app" className="btn btn-lg btn-primary enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,.6)" />
        </Link>
      </div>

    </div>
  );
}

export default Landing;