import {
  sendMessageChat,
} from '../../domain/entities/interfaces/chat.interfaces';

import {
  MethodsMessageRepository
} from '../../repositories/interfaces/message.interface';

export class ChatService {
  constructor(
    private readonly repository: MethodsMessageRepository,
  ) {
    this.repository = repository;
  }

  async sendMessage(
    data: sendMessageChat
  ) {
    const created = await this.repository.create(data);
    if (!created) return null;
    return created;
  }

  async findAllMessage(
    room: string
  ){
    const messages = await this.repository.findAll(room);
    return messages;
  }
}