import {
  ChatEntities
} from '../../domain/entities/chat.entities';
import {
  ChatService
} from './chat.service';
import {
  MessagesRepository as repository
} from '../../repositories/messages.repository';

export class ChatResolver {

  constructor(
    private readonly entities: ChatEntities,
  ) {
    this.entities = entities;
  }
  v
  async sendMessage(
    data: any,
    room: string
  ) {
    const Message = await this.entities.CreateMessage(data);

    if (Message.error) return Message;
    const service = new ChatService(
      new repository()
    )
    const { id, message, name, updatedAt, createdAt } = Message;
    const response = await service.sendMessage({ id, message, name, room, updatedAt, createdAt })

    if (!!!response) return null;

    return response;
  }

  async findAllMessages(
    room: string
  ) {

    const service = new ChatService(
      new repository()
    )
    const messages = await service.findAllMessage(room);
    // await this.entities.findAllMessages()

    return messages;
  }
}