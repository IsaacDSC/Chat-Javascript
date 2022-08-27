const CHAT_EVENTS = {
  CONNECTION: 'connection',
  CONNECTED: 'connected',
  DISCONNECT: 'disconnect',
  SEND_MESSAGE: 'send_message',
  BROADCAST_MESSAGE: 'broadcast_message',
  NEW_MESSAGE: 'new_message',
  ERROR: 'error',
  GET_ALL_MESSAGES: 'get_all_messages',
  GENERAL_CHANNEL: (id: string): string => `GENERAL-${id}`,
};

export {
  CHAT_EVENTS
}