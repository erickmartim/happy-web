import { MessagesContext } from 'common/providers/MessagesProvider';
import { useContext } from 'react';

function useMessages() {
  const { message, addMessage, removeMessage } = useContext(MessagesContext);
  return { message, addMessage, removeMessage };
}

export default useMessages;