import React from 'react';

import successIcon from 'images/SuccessIcon.svg';
import 'styles/components/happy-message.scss';

export default function MessageComponent() {
  return (
    <div className="happy-message">
      <div className="happy-message-container">
        <div className="happy-message-content">
          <h3 className="happy-message-title">Ebaaa!</h3>
          <p className="happy-message-text">O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>
        </div>
        <div className="happy-message-icon">
          <img src={successIcon} alt="Sucesso!" />
        </div>
      </div>
    </div>
  );
}