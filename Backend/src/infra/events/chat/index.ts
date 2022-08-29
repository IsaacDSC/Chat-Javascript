import {
  CHAT_EVENTS
} from '../../../app/utils';

import {
  ChatResolver
} from '../../../app/services/chat/chat.resolver';

import { ChatEntities } from '../../../app/domain/entities';
import { MessagesRepository } from '../../../app/repositories/messages.repository';

import { Socket } from 'socket.io';

export class ChatEvents {
  private Room = (eventId:string) => { return CHAT_EVENTS.GENERAL_CHANNEL(eventId); }

  sendMessage(socket, io: Socket): void {
    socket.on(CHAT_EVENTS.SEND_MESSAGE, async (params) => {
      const resolver = new ChatResolver(
        new ChatEntities()
      )
      const response = await resolver.sendMessage(params, this.Room(socket.eventId));

      socket.join(this.Room(socket.eventId));
      socket.emit(CHAT_EVENTS.NEW_MESSAGE, response);
      io.to(this.Room(socket.eventId)).emit(CHAT_EVENTS.BROADCAST_MESSAGE, response);

    });
  }
  async connected(socket, io: Socket, liveId: string): Promise<void> {
    const resolver = new ChatResolver(
      new ChatEntities()
    )

    const messages = await resolver.findAllMessages(this.Room(socket.eventId));
    socket.join(this.Room(socket.eventId));
    socket.emit(CHAT_EVENTS.GET_ALL_MESSAGES, messages)
  }
  disconnect(socket, io: Socket): void {
    socket.on(CHAT_EVENTS.DISCONNECT, async (params) => {
      console.info(`disconnect: ${socket.id}`);
    });
  }
}
