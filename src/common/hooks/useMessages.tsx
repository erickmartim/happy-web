import { MessagesContext } from 'common/providers/MessagesProvider';
import { useContext } from 'react';

function useMessages() {
  const { message, isOpen, addMessage, removeMessage } = useContext(MessagesContext);
  return { message, isOpen, addMessage, removeMessage };
}

export default useMessages;