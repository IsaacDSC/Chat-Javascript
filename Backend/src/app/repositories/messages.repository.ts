import { IChatEntities } from '../domain/entities/interfaces/chat.interfaces';
import {
  MethodsMessageRepository
} from './interfaces/message.interface';
import {
  prisma
} from '../../config/prisma';

export class MessagesRepository
  implements MethodsMessageRepository {

  private table = prisma.messages;

  async findAll(room: string) {
    const messages = await this.table.findMany({
      where: { room },
    })

    return messages;
  }
  async create(data: IChatEntities) {
    const { message, name, room, userId } = data;

    const Message = await this.table.create({
      data: {
        message,
        room,
        username: name,
        usersId: userId
      }
    });

    return Message;
  }
  async updated() { }
  async delete() { }
}