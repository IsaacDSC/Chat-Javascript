import { ChatWebsocket } from './chat.websocket';
import { ChatEvents } from '../../../infra/events/chat';
import { Server } from 'http';

export class WebsocketServer {
  constructor(
    private readonly server: Server
  ) {
    this.server = server;
  }

  public socketChat() {
    const chat = new ChatWebsocket(
      this.server, new ChatEvents()
    )
    return chat;
  }
}
