import React from 'react';
import useMessages from 'common/hooks/useMessages';

import 'styles/components/happy-message.scss';

export default function MessagesComponent() {

  const { message, removeMessage } = useMessages();

  if(message.timeout) {
    setTimeout(removeMessage, message.timeout);
  }
  
  return (
    <div>
    { message && message.title && message.type && message.text && (
        <div className={`happy-message ${message.type}`}>
          <div className="happy-message-container">
            <div className="happy-message-content">
              <h3 className="happy-message-title">{message.title}</h3>
              <p className="happy-message-text">{message.text}</p>

              { message.action }
            </div>
          </div>
        </div>
      )
    }
    </div>
  );
}