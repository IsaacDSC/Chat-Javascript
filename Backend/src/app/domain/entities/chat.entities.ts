import { randomUUID } from 'crypto';

import {
  IChatEntities,
  IReturnChatEntities,
} from './interfaces/chat.interfaces';

export class ChatEntities {
  constructor() { }

  async CreateMessage(
    data: IChatEntities
  ): Promise<IReturnChatEntities> {
    const { name, room, message } = data;

    if (!!!name || !!!room || !!!message) {
      return {
        error: 'lack of params',
        params: [name, room, message]
      };
    }

    return {
      id: randomUUID(),
      message: data.message,
      name: data.name,
      room: data.room,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  }

  async findAllMessages(
    data: IChatEntities[]
  ): Promise<IReturnChatEntities[]> {
    return data;
  }
}