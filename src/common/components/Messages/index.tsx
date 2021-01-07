import React from 'react';
import useMessages from 'common/hooks/useMessages';

import 'styles/components/happy-message.scss';
import { FaWindowClose } from 'react-icons/fa';

export default function Messages() {
  const { isOpen, message, removeMessage } = useMessages();

  if(message?.timeout) {
    setTimeout(removeMessage, message.timeout);
  }
  
  return (
    <div className={`happy-message ${isOpen ? 'happy-message-open' : 'happy-message-closed'} ${message?.type}`}>
      <div className="happy-message-container">
        <div className="happy-message-content">
          <h3 className="happy-message-title">{message?.title}</h3>
          <p className="happy-message-text">{message?.text}</p>

          { message?.action }
        </div>
        <span
          className={`happy-message-close button-messages-${message?.type}`}
          onClick={removeMessage}
        >
          <FaWindowClose size={30} />
        </span>
      </div>
    </div>
  );
}