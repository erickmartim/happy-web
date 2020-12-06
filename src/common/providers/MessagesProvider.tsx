import React, { useCallback, useState } from 'react';

interface MessagesProps {
  type: string;
  title: string;
  text: string;
  action?: object;
  timeout?: number;
}

export const MessagesContext = React.createContext({
  message: {
    type: 'success',
    title: 'Titulo',
    text: 'Texto'
  } as MessagesProps,
  addMessage: (messageObject: MessagesProps) => {},
  removeMessage: () => {}
});

export default function MessagesProvider({ children }: any) {
  const [message, setMessage] = useState<MessagesProps>({} as MessagesProps);

  const removeMessage = () => { setMessage({} as MessagesProps) };

  const addMessage = (messageObject: MessagesProps) => { setMessage(messageObject) }

  const contextValue = {
    message,
    addMessage: useCallback((messageObject: MessagesProps) => addMessage(messageObject), []),
    removeMessage: useCallback(() => removeMessage(), []),
  }

  return (
    <MessagesContext.Provider value={contextValue}>
      {children}
    </MessagesContext.Provider>
  )
}