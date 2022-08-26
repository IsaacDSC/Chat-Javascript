import * as http from 'http';
import { Server, Socket } from 'socket.io';
import { CHAT_EVENTS } from '../../../app/utils';

export class ChatWebsocket {
  public io: any;

  public socket: Socket;

  private chatEvents;

  constructor(
    server: http.Server,
    chatEvents
  ) {
    this.io = new Server(server, {
      path: '/chat',
      cors: { origin: '*' },
      transports: ['websocket'],
    });
    this.init();
    this.chatEvents = chatEvents;
  }

  private init(): void {
    this.io.on(CHAT_EVENTS.CONNECTION, (socket: any): void => {
      socket.emit(CHAT_EVENTS.CONNECTED, {
        chatId: CHAT_EVENTS.GENERAL_CHANNEL(socket.handshake.query.eventId),
      });
      socket.join(CHAT_EVENTS.GENERAL_CHANNEL(socket.eventId));
      console.info('connected: ', socket.id, socket.handshake.address);
      if (socket.error === 401) {
        socket.emit(CHAT_EVENTS.ERROR, 'Not authenticated');
        return socket.disconnect();
      }
      const { io } = this;
      this.chatEvents.connected(socket, io, socket.eventId);
      this.chatEvents.sendMessage(socket, io);
      this.chatEvents.disconnect(socket, io);
    });
  }
}
